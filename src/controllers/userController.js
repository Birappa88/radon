const UserModel = require("../models/userModel")
const ProductModel = require("../models/productModel")
const OrderModel = require("../models/orderModel")


const createProduct = async function (req, res) {
    let ProductCreated = await ProductModel.create(req.body)
    res.send(ProductCreated)
}

const middleware = async function (req, res, next) {
    let FreeAppUser = req.headers.isfreeappuser
    if (!FreeAppUser) { res.send({ Error: "request is missing a mandatory header" }) }
    let a = false
    if (FreeAppUser == "true") {
        a = true
    }
    req.isFreeAppUser = a
    next()
}

const createUser = async function (req, res) {
    let UserCreated = await UserModel.create(req.body)
    res.send({ User: UserCreated })
}


const createOrder = async function (req, res) {
    let UserId = req.body.userId
    let ProductId = req.body.productId
    if (!UserId) res.send({ Error: "UserId is required" })
    if (!ProductId) res.send({ Error: "ProductId is required" })

    let Balance = await UserModel.findById(UserId)
    let Price = await ProductModel.findById(ProductId)

    if (req.isFreeAppUser == false) {
        if (Balance.balance >= Price.price) {
            order = req.body
            order.amount = Price.price
            order.isFreeAppUser = false
            let OrderCreated = await OrderModel.create(order)
            res.send({ data: OrderCreated })
        }
        else  res.send({ Error: "Insufficient Balance" })
    }

    if (req.isFreeAppUser == true) {
        order = req.body
        order.isFreeAppUser = true;
        order.amount = 0;
        let OrderCreated = await OrderModel.create(order)
        res.send({ data: OrderCreated })
    }
}


module.exports.createUser = createUser
module.exports.createProduct = createProduct
module.exports.createOrder = createOrder
module.exports.middleware = middleware

