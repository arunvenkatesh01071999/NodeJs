const db = require('../models')

// model
const Standard = db.standards

// functions

//1. Add Standard

const addStandard = async (req, res) => {

    let data = {
        standard: req.body.standard,  
    }
    const review = await Standard.create(data)
    res.status(200).send(review)

}


const getAllStandard = async (req, res) => {
 
      let results= await  Standard.findAll({})
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
     // let standards = await Standard.findAll({})
     // res.status(200).send(standards)
  
  }



const getOneStandard = async (req, res) => {

    let id = req.params.id
    let standards = await Standard.findOne({ where: { id: id }})
    res.status(200).send(standards)

}

module.exports = {

    addStandard,
    getAllStandard,
    getOneStandard
}