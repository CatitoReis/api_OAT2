const mongoose = require('mongoose')

const selecaoSchema = mongoose.Schema({
    country: {
        type: String,
        required: true,

    },
    numPlayers: {
        type: Number,
        required: true,
    },
    numReserve: {
        type: Number,
        required: true,
    },
    coach: {
        type: String,
        required: true,
    },
        
    })

module.exports = mongoose.model('selecao', selecaoSchema)