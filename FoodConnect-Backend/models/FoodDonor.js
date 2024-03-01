const mongoose = require('mongoose');
const { Schema } = mongoose;

const donorSchema = new Schema({
    email: {
        type:String, 
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: Buffer,
        required: true
    },
    addresses:{
        type: [Schema.Types.Mixed],
    },
    name:{
        type: String,
        required: true,
    },
    city:{
        type:String,
        required: true
    },
    pinCode:{
        type: Number,
        required: true
    }
},{timestamps: true})


const virtual = donorSchema.virtual('id');
virtual.get(function (){
    return this._id;
})

donorSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) {
        delete ret._id;
    }  
})
module.exports = mongoose.model('Donor',donorSchema)