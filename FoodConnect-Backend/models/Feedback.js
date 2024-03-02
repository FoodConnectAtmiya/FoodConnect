const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedbackSchema = new Schema({
  donor_Id: {
    type: String,
    required: true,
  },
  organization_Id: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

// Create the virtual ID field and configure virtuals and transformers
feedbackSchema.virtual('id').get(function () {
  return this._id.toString(); // Convert _id to string for compatibility
});

feedbackSchema.set('toJSON', {
  virtuals: true,  // Include virtuals in the JSON output
  versionKey: false, // Exclude the versionKey field
  transform: (doc, ret) => {
    delete ret._id; // Delete the `_id` field from the serialized object
    return ret; // Return the modified object
  },
});

module.exports = mongoose.model('Feedback', feedbackSchema);