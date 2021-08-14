'use strict';

const express = require('express');

const router = express.Router();

const {orderCollection} = require('../models/index');
// console.log(People)
// add routes
router.get('/order', getOrder);
router.get('/order/:id', getOneOrder);
router.post('/order', createOrder);
router.delete('/order/:id', deleteOrder);
router.put('/order/:id', updateOrder);


async function getOrder(req, res) {
    // get me all data from people
    let order = await orderCollection.read();
    res.status(200).json(order);
}



async function getOneOrder(req, res) {
    // get me one
   
        let id = parseInt(req.params.id);
        let order = await orderCollection.read(id);
        if(order === null){
            res.status(200).send("There's no order with that ID");
        } else {
            res.status(200).json(order);

        }
      

}

async function deleteOrder(req, res) {
    let id = parseInt(req.params.id);

    let deletedOrder = await orderCollection.delete(id);
    res.status(204).json(deletedOrder);
}


async function createOrder(req, res) {
    let newOrder = req.body;
    let order = await orderCollection.create(newOrder);
    res.status(200).json(order);
}


async function updateOrder(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    // find the person
  
    let updatedOrder = await orderCollection.update(id, obj);
    res.status(200).json(updatedOrder);
}


module.exports = router;