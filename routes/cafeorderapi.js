const express = require('express');
const router = express.Router();

const CafeOrder = require('../models/cafeorder');


router.get('/cafeorders', (req, res, next) => {
  CafeOrder.find({}, 'cafeorder')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/cafeorders', (req, res, next) => {
  if (req.body.cafeorder) {
    CafeOrder.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The order is empty',
    });
  }
});

router.delete('/cafeorders/:id', (req, res, next) => {
  CafeOrder.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
