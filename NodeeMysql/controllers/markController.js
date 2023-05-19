const db = require('../models');

// model
const Mark = db.marks

// functions

//1. Add Mark

const addMark = async (req, res) => {

    let data = {
        rating: req.body.rating,  
    }
    const review = await Mark.create(data)
    res.status(200).send(review)

}

// 2. Get All Mark

// const getAllMarks = async (req, res) => {

//     const myreviews = await Mark.findAll()
//     res.status(200).send(myreviews)

// }

const getAllMarks = async (req, res) => {

  let myreviews = await Mark.findAll({})

  let students = await Mark.findOne()
  res.status(200).send(students)

}

/*const getAllMarks = async (req, res) => {
 
    const resultt= await  Mark.findAll({})
      .then((resultt) => {
        res.status(200).send(resultt);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }*/



const getOneMark = async (req, res) => {

    let id = req.params.id
    let students = await Mark.findOne({ where: { id: id }})
    res.status(200).send(students)

}

module.exports = {

    addMark,
    getAllMarks,
    getOneMark
}