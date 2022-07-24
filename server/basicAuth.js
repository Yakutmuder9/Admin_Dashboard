function authUser(req, res, next) {
  if (req.user == null) {
    res.status(403)
    return res.send('You need to sign in')
  }

  next()
}

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401)
      return res.send('Not allowed')
    }

    next()
  }
}

module.exports = {
  authUser,
  authRole
}




const { ROLE } = require('../data')

function canViewProject(user, project) {
  return (
    user.role === ROLE.ADMIN ||
    project.userId === user.id
  )
}

function scopedProjects(user, projects) {
  if (user.role === ROLE.ADMIN) return projects
  return projects.filter(project => project.userId === user.id)
}

function canDeleteProject(user, project) {
  return project.userId === user.id
}

module.exports = {
  canViewProject,
  scopedProjects,
  canDeleteProject
}