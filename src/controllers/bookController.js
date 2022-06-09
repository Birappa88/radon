const AuthorModel = require("../models/authorModel")
const BookModel = require("../models/bookModel")
const PublisherModel = require("../models/publisherModel")


const createAuthor = async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({ data: authorCreated })
}

const createPublisher = async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({ data: publisherCreated })
}


const createBook = async function (req, res) {
    let book = req.body
    let authorId = req.body.author
    let publisherId = req.body.publisher

    if (!authorId) res.send({ error: "author Id is required" })

    const authorInfo = await AuthorModel.findById(authorId)
    if (!authorInfo) res.send({ error: "enter valid author Id" })
    if (!publisherId) res.send({ error: "publisher Id is required" })

    const publisherInfo = await PublisherModel.findById(publisherId)
    if (!publisherInfo) res.send({ error: "enter valid publisher Id" })

    let bookCreated = await BookModel.create(book)
    res.send({ data: bookCreated })
}


const getBooksWithAuthorPublisher = async function (req, res) {
    let specificBook = await BookModel.find().populate(['author', 'publisher'])
    res.send({ data: specificBook })
}






module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.createPublisher = createPublisher
module.exports.getBooksWithAuthorPublisher = getBooksWithAuthorPublisher
