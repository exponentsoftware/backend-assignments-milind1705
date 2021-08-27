const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    todo:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo"
    }]
}, {timestamps: true}
)

module.exports = mongoose.model('Category', categorySchema)