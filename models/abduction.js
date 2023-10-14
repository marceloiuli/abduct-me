const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const abductionSchema = new Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    date: {type: Date, required: true},
    ufoChoice: {type: String, required: true},
    abType: {type: String, required: true},
    specialRequest: {type: String},
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, {
    timestamps: true,
})
module.exports = mongoose.model('Abduction', abductionSchema);