
const mongoose = require('mongoose');
const { Schema } = mongoose;

const availabilitySchema = new Schema({
    donor_id:{
        type: String,
        ref: 'Donor',
        required: true,
    },
    status:{
        type: String,
        default: 'pending',
    },
    people_serve:{
        type: Number,
        requird: true
    },
    collection_time:{
        type: Date,
    },
    notes:{
        type: String,
    },
    organization_id:{
        type: String,
        ref: 'Organization',
        required: true,
    },
    pinCode: {
        type: Number,
        required: true,
    }
},{timestamps: true})

const virtual = availabilitySchema.virtual('id');
virtual.get(function (){
    return this._id;
})

availabilitySchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) {
        delete ret._id;
    }
})
module.exports = mongoose.model('Availability',availabilitySchema);