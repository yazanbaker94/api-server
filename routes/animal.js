'use strict';

const express = require('express');

const router = express.Router();

const {animalCollection} = require('../models/index');
// console.log(People)
// add routes
router.get('/', helloMSG);


router.get('/animal', getAnimal);
router.get('/animal/:id', getOneAnimal);

router.post('/animal', createAnimal);
router.delete('/animal/:id', deleteAnimal);
router.put('/animal/:id', updateAnimal);

async function helloMSG(req, res) {
    // get me all data from people

    res.status(200).send("hello");

}


async function getAnimal(req, res) {
    // get me all data from people
    let animal = await animalCollection.read();
    res.status(200).json(animal);

}

async function getOneAnimal(req, res) {
    // get me one
   
        let id = parseInt(req.params.id);
        let animal = await animalCollection.read(id);
        if(animal === null){
            res.status(200).send("There's no animal with that ID");
        } else {
            res.status(200).json(animal);

        }
      

}


async function createAnimal(req, res) {
    let newAnimal = req.body;
    let animal = await animalCollection.create(newAnimal);
    res.status(200).json(animal);
}

async function deleteAnimal(req, res) {
    let id = parseInt(req.params.id);

    let deletedAnimal = await animalCollection.delete(id);
    res.status(204).json(deletedAnimal);
}

async function updateAnimal(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    // find the person
  
    let updatedAnimal = await animalCollection.update(id, obj);
    res.status(200).json(updatedAnimal);
}


module.exports = router;