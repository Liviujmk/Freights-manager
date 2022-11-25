// company schema
const mongoose = require('mongoose')
//schema


const companySchema = new mongoose.Schema({
    name: String,
    description: String,
    address: String,
    phone: String,
    email: String,
    createdAt: { type: Date, default: Date.now },
    trucks: [{
        number: String,
        records: [{
            createdAt : { type: Date, default: Date.now() },
            commandNr: String,
            commandLink: String,
            commandDate: { type: String, default: Date.now() },
            creditNoteNr: String,
            creditNoteLink: String,
            creditNoteDate: { type: String, default: Date.now() },
            loadings: [{
                loadCompany: String,
                loadAddress: String
            }],
            unloadings: [{
                unloadCompany: String,
                unloadAddress: String
            }],
            cmrLink: String,
            paymentStatus: {
                type: String,
                default: "Not paid"
            },
            km: Number,
            price: Number

        }]
    }]
});

module.exports = mongoose.model('Company', companySchema);

