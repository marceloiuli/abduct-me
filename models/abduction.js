const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const abductionSchema = new Schema({
    Name: {type: String, required: true},
    Phone: {type: Number, required: true},
    Email: {type: String, required: true},
    date: {type: Date, required: true},
    UfoChoice: {type: String, required: true},
    AbductionExp: {type: String, required: true},
    SpecialRequest: {type: String},
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, {
    timestamps: true,
})
module.exports = mongoose.model('Abduction', abductionSchema);