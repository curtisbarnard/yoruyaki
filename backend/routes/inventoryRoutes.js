const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get Inventory' });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Create Inventory' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update inventory item ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete inventory item ${req.params.id}` });
});

module.exports = router;
