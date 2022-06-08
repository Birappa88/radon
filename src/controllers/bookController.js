const { count } = require("console")
const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")


const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData })
}

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}


const getBooksbyChetanBhagat = async function (req, res) {
    let data = await AuthorModel.find({ author_name: "Chetan Bhagat" }).select({ author_id: 1, _id: 0 })

    console.log(data)
    let bookData = await BookModel.find({ author_id: data[0].author_id })
    res.send({ msg: bookData })
}


const getAuthorOfTwoStates = async function (req, res) {
    let data = await BookModel.findOneAndUpdate(
        { name: "Two states" },
        { $set: { price: 100 } },
        { new: true }
    )
    let authorData = await AuthorModel.find({ author_id: data.author_id }).select("author_name")
    let newPrice = data.price
    res.send({ msg: authorData, newPrice })
}


const getBookCostBetn50_100 = async function (req, res) {
    let data = await BookModel.find({ price: { $gte: 50, $lte: 100 } })
    let result = []
    data.forEach(async (book, index) => {
        let authorData = await AuthorModel.findOne({ author_id: book.author_id }).select("author_name")
        result.push({ [book.name]: authorData.author_name })
        if (index == data.length - 1)
            res.send(result)
    })
}


const getBooksByAuthorId = async function (req, res) {
    let id = req.params.author_id
    let books = await BookModel.find({ author_id: id }).select("name")
    res.send(books)
}


const getAuthorsOlderThan50 = async function (req, res) {
    let data = await BookModel.find({ ratings: { $gt: 4 } }).select({ author_id: 1 })
    let authors = await AuthorModel.find({ age: { $gt: 50 } }).select({ author_name: 1, age: 1, _id: 0 })
    if (authors.author_id == data.author_id)
        res.send({ msg: authors })
}


module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getBooksbyChetanBhagat = getBooksbyChetanBhagat
module.exports.getAuthorOfTwoStates = getAuthorOfTwoStates
module.exports.getBookCostBetn50_100 = getBookCostBetn50_100
module.exports.getBooksByAuthorId = getBooksByAuthorId
module.exports.getAuthorsOlderThan50 = getAuthorsOlderThan50