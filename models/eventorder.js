const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventOrderSchema = new Schema({
  eventorder: {
    _id: {
      type: "ObjectId",
      required: [true],
    },
    items: {
      type: "Array",
      required: [true],
    },
    event: {
      type: "String",
      required: [true],
    },
    subtotal: {
      type: "Decimal128",
      required: [true],
    },
    tax: {
      type: "Decimal128",
      required: [true],
    },
    total: {
      type: "Decimal128",
      required: [true],
    },
    customername: {
      type: "String",
      required: [true],
    },
    time: {
      type: "Date",
      required: [true],
    },
    instructions: {
      type: "String",
      required: [true],
    }
  }
});

const EventOrder = mongoose.model('eventorder', EventOrderSchema);

module.exports = EventOrder;
