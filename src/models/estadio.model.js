const mongoose = require('mongoose')

const estadioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    capacity: {
        type: Number,
        required: true,
    },
    locatedIn: {
        type: String,
        required: true,
    },
    typeLawn: {
        type: String,
        enum: ['SINTETICO', 'GRAMA'],
        default:'GRAMA',
    
    },
        
    })

module.exports = mongoose.model('estadio', estadioSchema)