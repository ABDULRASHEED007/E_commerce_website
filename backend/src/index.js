const express = require("express");
const cors = require("cors");
const authRouters = require("./routes/auth.route.js")
const userRouters = require("./routes/user.route.js")
const productRouters = require("./routes/product.route.js")
const adminOrderRouters = require("./routes/adminOrder.route.js")
const adminProductRouters = require("./routes/adminProduct.route.js")
const cartItemRouters = require("./routes/cartItem.route.js")
const cartRouters = require("./routes/cart.route.js")
const orderRouters = require("./routes/order.route.js")
const reviewRouters = require("./routes/review.route.js")
const ratingRouters = require("./routes/rating.route.js")

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send({ message: "Hello World - Ecommerce" })
})

app.use("/auth", authRouters)

app.use("/api/users", userRouters)

app.use("/api/products", productRouters)

app.use("/api/admin/products", adminProductRouters)

app.use("/api/admin/orders", adminOrderRouters)

app.use("/api/cart", cartRouters)

app.use("/api/orders", orderRouters)

app.use("/api/reviews", reviewRouters)

app.use("/api/ratings", ratingRouters)

app.use("/api/cart_items", cartItemRouters)

module.exports = app