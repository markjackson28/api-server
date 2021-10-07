'use strict';

const express = require('express');

// Importing Collection 
const  apexLegendCollection = require('../models/index').ApexLegend;

const router = express.Router();

// Routes
router.get('/apexlegend', getLegends);
router.get('/apexlegend/:id', getOneLegend);
router.post('/apexlegend', createLegend);
router.put('/apexlegend/:id', updateLegend);
router.delete('/apexlegend/:id', deleteLegend);

// Handlers 
async function getLegends(req, res) {
  let allLegends = await apexLegendCollection.read();
  res.status(200).json(allLegends);
}

async function getOneLegend(req, res) {
  const id = req.params.id;
  let legend = await apexLegendCollection.read(id);
  res.status(200).json(legend);
}

async function createLegend(req, res) {
  let legendObj = req.body;
  let legend = await apexLegendCollection.create(legendObj);
  res.status(200).json(legend);
}

async function updateLegend(req, res) {
  const id = req.params.id;
  const legendObj = req.body;
  let updatedLegend = await apexLegendCollection.update(id, legendObj);
  res.status(200).json(updatedLegend);
}

async function deleteLegend(req, res) {
  let id = req.params.id;
  let deletedLegend = await apexLegendCollection.delete(id);
  res.status(200).json(deletedLegend);
}

module.exports = router;
