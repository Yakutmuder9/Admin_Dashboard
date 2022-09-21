const express = require('express');
const Course = require('../modal/course');
// const authenticate = require('../authenticate');

const courseRouter = express.Router();

courseRouter.route('/')
    .get((req, res, next) => {
        Course.find()
            // .populate('comments.author')
            .then(courses => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(courses);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Course.create(req.body)
            .then(course => {
                console.log('Course Created ', course);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(course);
            })
            .catch(err => next(err));
    })
    .put( (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /courses');
    })
    .delete( (req, res, next) => {
        Course.deleteMany()
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });

courseRouter.route('/:courseId')
    .get((req, res, next) => {
        Course.findById(req.params.courseId)
            // .populate('comments.author')
            .then(course => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(course);
            })
            .catch(err => next(err));
    })
    .post( (req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /courses/${req.params.courseId}`);
    })
    .put((req, res, next) => {
        Course.findByIdAndUpdate(req.params.courseId, {
            $set: req.body
        }, { new: true })
            .then(course => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(course);
            })
            .catch(err => next(err));
    })
    .delete((req, res, next) => {
        Course.findByIdAndDelete(req.params.courseId)
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });

courseRouter.route('/:courseId/comments')
    .get((req, res, next) => {
        Course.findById(req.params.courseId)
            .populate('comments.author')
            .then(course => {
                if (course) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(course.comments);
                } else {
                    err = new Error(`Course ${req.params.courseId} not found`);
                    err.status = 404;
                    return next(err);
                }
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Course.findById(req.params.courseId)
            .then(course => {
                if (course) {
                    req.body.author = req.user._id;
                    course.comments.push(req.body);
                    course.save()
                        .then(course => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(course);
                        })
                        .catch(err => next(err));
                } else {
                    err = new Error(`Course ${req.params.courseId} not found`);
                    err.status = 404;
                    return next(err);
                }
            })
            .catch(err => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /courses/${req.params.courseId}/comments`);
    })
    .delete((req, res, next) => {
        Course.findById(req.params.courseId)
            .then(course => {
                if (course) {
                    for (let i = (course.comments.length - 1); i >= 0; i--) {
                        course.comments.id(course.comments[i]._id).remove();
                    }
                    course.save()
                        .then(course => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(course);
                        })
                        .catch(err => next(err));
                } else {
                    err = new Error(`Course ${req.params.courseId} not found`);
                    err.status = 404;
                    return next(err);
                }
            })
            .catch(err => next(err));
    });

courseRouter.route('/:courseId/comments/:commentId')
    .get((req, res, next) => {
        Course.findById(req.params.courseId)
            .populate('comments.author')
            .then(course => {
                if (course && course.comments.id(req.params.commentId)) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(course.comments.id(req.params.commentId));
                } else if (!course) {
                    err = new Error(`Course ${req.params.courseId} not found`);
                    err.status = 404;
                    return next(err);
                } else {
                    err = new Error(`Comment ${req.params.commentId} not found`);
                    err.status = 404;
                    return next(err);
                }
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /courses/${req.params.courseId}/comments/${req.params.commentId}`);
    })
    .put( (req, res, next) => {
        Course.findById(req.params.courseId)
            .then(course => {
                if (course && course.comments.id(req.params.commentId)) {
                    if ((course.comment.id(req.params.commentId).author._id).equals(req.user._id)) {
                        if (req.body.rating) {
                            course.comments.id(req.params.commentId).rating = req.body.rating;
                        }
                        if (req.body.text) {
                            course.comments.id(req.params.commentId).text = req.body.text;
                        }
                        course.save()
                            .then(course => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(course);
                            })
                            .catch(err => next(err));
                    } else {
                        err = new Error(`You are not authorized to update comment!`);
                        err.status = 404;
                        return next(err);
                    }
                } else if (!course) {
                    err = new Error(`course ${req.params.courseId} not found`);
                    err.status = 404;
                    return next(err);
                } else {
                    err = new Error(`Comment ${req.params.commentId} not found`);
                    err.status = 404;
                    return next(err);
                }
            })
            .catch(err => next(err));
    })
    .delete( (req, res, next) => {
        Course.findById(req.params.courseId)
            .then(course => {
                if (course && course.comments.id(req.params.commentId)) {
                    if ((course.comment.id(req.params.commentId).author._id).equals(req.user._id)) {
                        course.comments.id(req.params.commentId).remove();
                        course.save()
                            .then(course => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(course);
                            })
                            .catch(err => next(err));
                    } else {
                        err = new Error(`You are not authoirzed!`);
                        err.status = 404;
                        return next(err);
                    }

                } else if (!course) {
                    err = new Error(`Course ${req.params.courseId} not found`);
                    err.status = 404;
                    return next(err);
                } else {
                    err = new Error(`Comment ${req.params.commentId} not found`);
                    err.status = 404;
                    return next(err);
                }
            })
            .catch(err => next(err));
    });












//     courseRouter.route('/')
//     .get((req, res, next) => {
//         Course.find()
//             // .populate('comments.author')
//             .then(courses => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(courses);
//             })
//             .catch(err => next(err));
//     })
//     .post(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
//         Course.create(req.body)
//             .then(course => {
//                 console.log('Course Created ', course);
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(course);
//             })
//             .catch(err => next(err));
//     })
//     .put(authenticate.verifyUser, (req, res) => {
//         res.statusCode = 403;
//         res.end('PUT operation not supported on /courses');
//     })
//     .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
//         Course.deleteMany()
//             .then(response => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(response);
//             })
//             .catch(err => next(err));
//     });

// courseRouter.route('/:courseId')
//     .get((req, res, next) => {
//         Course.findById(req.params.courseId)
//             // .populate('comments.author')
//             .then(course => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(course);
//             })
//             .catch(err => next(err));
//     })
//     .post(authenticate.verifyUser, (req, res) => {
//         res.statusCode = 403;
//         res.end(`POST operation not supported on /courses/${req.params.courseId}`);
//     })
//     .put(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
//         Course.findByIdAndUpdate(req.params.courseId, {
//             $set: req.body
//         }, { new: true })
//             .then(course => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(course);
//             })
//             .catch(err => next(err));
//     })
//     .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
//         Course.findByIdAndDelete(req.params.courseId)
//             .then(response => {
//                 res.statusCode = 200;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.json(response);
//             })
//             .catch(err => next(err));
//     });

// courseRouter.route('/:courseId/comments')
//     .get((req, res, next) => {
//         Course.findById(req.params.courseId)
//             .populate('comments.author')
//             .then(course => {
//                 if (course) {
//                     res.statusCode = 200;
//                     res.setHeader('Content-Type', 'application/json');
//                     res.json(course.comments);
//                 } else {
//                     err = new Error(`Course ${req.params.courseId} not found`);
//                     err.status = 404;
//                     return next(err);
//                 }
//             })
//             .catch(err => next(err));
//     })
//     .post(authenticate.verifyUser, (req, res, next) => {
//         Course.findById(req.params.courseId)
//             .then(course => {
//                 if (course) {
//                     req.body.author = req.user._id;
//                     course.comments.push(req.body);
//                     course.save()
//                         .then(course => {
//                             res.statusCode = 200;
//                             res.setHeader('Content-Type', 'application/json');
//                             res.json(course);
//                         })
//                         .catch(err => next(err));
//                 } else {
//                     err = new Error(`Course ${req.params.courseId} not found`);
//                     err.status = 404;
//                     return next(err);
//                 }
//             })
//             .catch(err => next(err));
//     })
//     .put(authenticate.verifyUser, (req, res) => {
//         res.statusCode = 403;
//         res.end(`PUT operation not supported on /courses/${req.params.courseId}/comments`);
//     })
//     .delete(authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
//         Course.findById(req.params.courseId)
//             .then(course => {
//                 if (course) {
//                     for (let i = (course.comments.length - 1); i >= 0; i--) {
//                         course.comments.id(course.comments[i]._id).remove();
//                     }
//                     course.save()
//                         .then(course => {
//                             res.statusCode = 200;
//                             res.setHeader('Content-Type', 'application/json');
//                             res.json(course);
//                         })
//                         .catch(err => next(err));
//                 } else {
//                     err = new Error(`Course ${req.params.courseId} not found`);
//                     err.status = 404;
//                     return next(err);
//                 }
//             })
//             .catch(err => next(err));
//     });

// courseRouter.route('/:courseId/comments/:commentId')
//     .get((req, res, next) => {
//         Course.findById(req.params.courseId)
//             .populate('comments.author')
//             .then(course => {
//                 if (course && course.comments.id(req.params.commentId)) {
//                     res.statusCode = 200;
//                     res.setHeader('Content-Type', 'application/json');
//                     res.json(course.comments.id(req.params.commentId));
//                 } else if (!course) {
//                     err = new Error(`Course ${req.params.courseId} not found`);
//                     err.status = 404;
//                     return next(err);
//                 } else {
//                     err = new Error(`Comment ${req.params.commentId} not found`);
//                     err.status = 404;
//                     return next(err);
//                 }
//             })
//             .catch(err => next(err));
//     })
//     .post(authenticate.verifyUser, (req, res) => {
//         res.statusCode = 403;
//         res.end(`POST operation not supported on /courses/${req.params.courseId}/comments/${req.params.commentId}`);
//     })
//     .put(authenticate.verifyUser, (req, res, next) => {
//         Course.findById(req.params.courseId)
//             .then(course => {
//                 if (course && course.comments.id(req.params.commentId)) {
//                     if ((course.comment.id(req.params.commentId).author._id).equals(req.user._id)) {
//                         if (req.body.rating) {
//                             course.comments.id(req.params.commentId).rating = req.body.rating;
//                         }
//                         if (req.body.text) {
//                             course.comments.id(req.params.commentId).text = req.body.text;
//                         }
//                         course.save()
//                             .then(course => {
//                                 res.statusCode = 200;
//                                 res.setHeader('Content-Type', 'application/json');
//                                 res.json(course);
//                             })
//                             .catch(err => next(err));
//                     } else {
//                         err = new Error(`You are not authorized to update comment!`);
//                         err.status = 404;
//                         return next(err);
//                     }
//                 } else if (!course) {
//                     err = new Error(`course ${req.params.courseId} not found`);
//                     err.status = 404;
//                     return next(err);
//                 } else {
//                     err = new Error(`Comment ${req.params.commentId} not found`);
//                     err.status = 404;
//                     return next(err);
//                 }
//             })
//             .catch(err => next(err));
//     })
//     .delete(authenticate.verifyUser, (req, res, next) => {
//         Course.findById(req.params.courseId)
//             .then(course => {
//                 if (course && course.comments.id(req.params.commentId)) {
//                     if ((course.comment.id(req.params.commentId).author._id).equals(req.user._id)) {
//                         course.comments.id(req.params.commentId).remove();
//                         course.save()
//                             .then(course => {
//                                 res.statusCode = 200;
//                                 res.setHeader('Content-Type', 'application/json');
//                                 res.json(course);
//                             })
//                             .catch(err => next(err));
//                     } else {
//                         err = new Error(`You are not authoirzed!`);
//                         err.status = 404;
//                         return next(err);
//                     }

//                 } else if (!course) {
//                     err = new Error(`Course ${req.params.courseId} not found`);
//                     err.status = 404;
//                     return next(err);
//                 } else {
//                     err = new Error(`Comment ${req.params.commentId} not found`);
//                     err.status = 404;
//                     return next(err);
//                 }
//             })
//             .catch(err => next(err));
//     });


module.exports = courseRouter;