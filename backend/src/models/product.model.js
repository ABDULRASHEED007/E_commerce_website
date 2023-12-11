const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number,
    },
    discountPersent: {
        type: Number,
    },
    quantity: {
        type: Number,
        required: true,


    },
    color: {
        type: String,
    },
    brand: {
        type: String,
    },

    sizes: [{
        name: { type: String },
        quantity: { type: Number },
    }],

    imageUrl: {
        type: String,
    },
    numRatings: {
        type: Number,
        default: 0
    },

    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ratings'
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reviews'
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }



})

const Product = mongoose.model('products', productSchema)
module.exports = Product