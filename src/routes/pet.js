'use strict';

const express = require('express');

// Importing Collection
const petCollection  = require('../models/index').Pet;

const router = express.Router();

// Routes
router.get('/pet', getPet);
router.get('/pet/:id', getOnePet);
router.post('/pet', createPet);
router.put('/pet/:id', updatePet);
router.delete('/pet/:id', deletePet);

// Handlers 
async function getPet(req, res) {
  let allPets = await petCollection.read();
  res.status(200).json(allPets);
}

async function getOnePet(req, res) {
  const id = req.params.id;
  let pet = await petCollection.read(id);
  res.status(200).json(pet);
}

async function createPet(req, res) {
  let petObj = req.body;
  let pet = await petCollection.create(petObj);
  res.status(200).json(pet);
}

async function updatePet(req, res) {
  const id = req.params.id;
  const petObj = req.body;
  let updatedPet = await petCollection.update(id, petObj);
  res.status(200).json(updatedPet);
}

async function deletePet(req, res) {
  let id = parseInt(req.params.id);
  let deletedPet = await petCollection.delete(id);
  res.status(200).json(deletedPet);
}

module.exports = router;
