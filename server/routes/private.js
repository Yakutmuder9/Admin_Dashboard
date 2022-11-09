const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { upload } = require("../utils/fileUpload");
const {
    getUserData,
    updateUserData,
    deleteUser
} = require('../controllers/private');
const { 
    fetchAllUsersCourses, createCourse, getCourses, getCourse, updateCourse, deleteCourse
} = require('../controllers/course');

router.route("/getuserdata").get(protect, getUserData);
// router.route("/updateuserdata").patch(protect, upload.single("image"), updateUserData);
router.route("/deleteuser").delete(protect, deleteUser);


router.route("/fetchallcourses").get(protect, fetchAllUsersCourses);
// router.route("/course").course(protect, upload.single("image"), createCourse);
// router.route("/course/:id").patch(protect, upload.single("image"), updateCourse);
router.route("/course").get(protect, getCourses);
router.route("/course/:id").get(protect, getCourse);
router.route("/course/:id").delete(protect, deleteCourse);

module.exports = router;




