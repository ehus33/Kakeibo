const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataFile = path.join(__dirname, 'data.json');

router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  res.json(data);
});

router.post('/', (req, res) => {
  const newEntry = req.body;
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  data.push(newEntry);
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
  res.status(201).json({ message: 'Entry added' });
});

router.delete('/:index', (req, res) => {
  const index = parseInt(req.params.index, 10);
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  if (index >= 0 && index < data.length) {
    data.splice(index, 1);
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.status(200).json({ message: 'Entry deleted' });
  } else {
    res.status(404).json({ message: 'Invalid index' });
  }
});

module.exports = router;
