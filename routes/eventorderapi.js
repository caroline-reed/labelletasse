const express = require('express');
const router = express.Router();

const EventOrder = require('../models/eventorder');


router.get('/eventorders', (req, res, next) => {
  EventOrder.find({}, 'eventorder')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/eventorders', (req, res, next) => {
  if (req.body.eventorder) {
    EventOrder.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The order is empty',
    });
  }
});

router.delete('/eventorders/:id', (req, res, next) => {
  EventOrder.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;
