const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');
const ResponseSchema = require('./Response');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  // responses: [ResponseSchema],
  responses: [
    {
      score: Number,
      reason: String,
    },
  ],
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model('surveys', surveySchema);
