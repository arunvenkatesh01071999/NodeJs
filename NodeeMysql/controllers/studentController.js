const db = require('../models');
//const student = require('../models/markModel')

// create main Model
const Student = db.students
const Mark = db.marks
const Standard = db.standards

// main work

// 1. create student

const addStudent = async (req, res) => {

    let info = {
        name: req.body.name,
        age: req.body.age,
        phNo: req.body.phNo,
        email: req.body.email  
       }

    const students = await Student.create(info)
    res.status(200).send(students)
    console.log(students)

}



// 2. get all students

const getAllStudentS = async (req, res) => {

    let students = await Student.findAll({})
    .then((students) => {
        res.status(200).send(students);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
   // res.status(200).send(students)

}

// 3. get single student

const getOneStudent = async (req, res) => {

    let id = req.params.id
    let students = await Student.findOne({ where: { id: id }})
    res.status(200).send(students)

}

// 4. update student

const updateStudent = async (req, res) => {

    let id = req.params.id

    const students = await Student.update(req.body, { where: { id: id }})

    res.status(200).send(students)
   

}

// 5. delete student by id

const deleteStudent = async (req, res) => {

    let id = req.params.id
    
    await Student.destroy({ where: { id: id }} )

    res.status(200).send('Student is deleted !')

}


const getStudentMarkStandard =  async (req, res) => {
        
    let id = req.params.id
        const data = await Student.findAll({
            include: [{ 
                model: Mark,
               as:'marks',
            },
            {
                model: Standard,
                as:'standards'
            }],
            where: { id: id }
        })
    
        res.status(200).send(data)
    
    } 

   /* const getStudentMarkStandard =  async (req, res) => {
        
        let id = req.params.id
            const data = await Student.findAll({
                include: [{ 
                    model: [{
                        Standard,
                        as:'standards'
                    }]
                   
                }],
                where: { id: id }
            })
        
            res.status(200).send(data)
        
        } */
    
        const getStudentMarkStandards =  async (req, res) => {
        
           // let id = req.params.id
                const data = await Student.findAll({
                    include: [{ 
                        model: Mark,
                       as:'marks',
                    },
                    {
                        model: Standard,
                        as:'standards'
                    }],
                   
                })
            
                res.status(200).send(data)
            
            } 




module.exports = {
    addStudent,
    getAllStudentS,
    getOneStudent,
    updateStudent,
    deleteStudent,
    getStudentMarkStandard,
    getStudentMarkStandards
}