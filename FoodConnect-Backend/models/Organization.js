const mongoose = require('mongoose')
const { Schema } = mongoose;

const organizationSchema = new Schema({
    email: {
        type:String, 
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: { 
        type: Buffer,
        required: true
     },
    addresses:{
        type: String,
    },
    acceptance_status:{
        type: String,
        default: 'pending'
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
    },
    min_serveble:{
        type: Number,
        default: 1
    },
    max_distance:{
        type: Number,
        default: -1
    }
},{timestamps: true})


const virtual = organizationSchema.virtual('id');
virtual.get(function (){
    return this._id;
})

// organizationSchema.set('toJSON',{
//     virtuals: true,
//     versionKey: false,
//     transform: function (doc,ret) {
//         delete ret._id;
//     }  
// })
module.exports = mongoose.model('Organization',organizationSchema);
