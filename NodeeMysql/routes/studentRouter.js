// import controllers student, standard
const studentController = require('../controllers/studentController.js')
const markController = require('../controllers/markController.js')
const standardController = require('../controllers/standardController.js')



// router
const router = require('express').Router()


// Student router

router.post('/addStudent', studentController.addStudent)

router.get('/get/allStudents', studentController.getAllStudentS)

router.get('/get/:id', studentController.getOneStudent)

router.put('/put/:id', studentController.updateStudent)

router.delete('/delete/:id', studentController.deleteStudent)

// Mark router

router.post('/addMark', markController.addMark)
router.get('/get/allMark', markController.getAllMarks)
router.get('/getmark/:id', markController.getOneMark)


// Standard router

router.post('/addStandard', standardController.addStandard)
router.get('/get/allStandard', standardController.getAllStandard)
router.get('/getStandard/:id', standardController.getOneStandard)

// Student Mark router

//router.get('/getStudentMark/:id', studentController.getStudentMark)

// Student Marks Standards router

router.get('/getStudentMarkStandard/:id', studentController.getStudentMarkStandard)

router.get('/getStudentMarkStandards', studentController.getStudentMarkStandards)

module.exports = router










