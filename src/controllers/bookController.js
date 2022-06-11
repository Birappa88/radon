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
    console.log(authorInfo._id.toString())
    if (!authorInfo) res.send({ error: "enter valid author Id" })

    if (!publisherId) res.send({ error: "publisher Id is required" })

    const publisherInfo = await PublisherModel.findById(publisherId)
    if (!publisherInfo) res.send({ error: "enter valid publisher Id" })

    let bookCreated = await BookModel.create(book)
    res.send({ data: bookCreated })
}


const getBooksWithAuthorPublisher = async function (req, res) {
    let specificBook = await BookModel.findOne().populate(['author', 'publisher'])
    res.send({ data: specificBook })
}


const isHardCoverTrue = async function (req, res) {

 let publishersId1 = await PublisherModel.findOne({name:["Penguin"]})
 let publishersId2 = await PublisherModel.findOne({name:["HarperCollins"]})

    let trueValue = await BookModel.updateMany(
        {publisher: [publishersId1._id.toString(),publishersId2._id.toString()]},
        {isHardCover: true}
    )
    res.send({updatedData: trueValue})
}

const updateBookPriceBy10 = async function (req, res) {

let BestAuthors = await AuthorModel.find({rating: {$gt: 3.5}}).select({_id:1})
let AuthorArray = BestAuthors.map((Object) => { return Object._id.toString()})

let updatedPrice = await BookModel.updateMany(
    {author: AuthorArray},
    {$inc: {price:10}}
)
res.send({updatedData: updatedPrice})
}

module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.createPublisher = createPublisher
module.exports.getBooksWithAuthorPublisher = getBooksWithAuthorPublisher
module.exports.isHardCoverTrue = isHardCoverTrue
module.exports.updateBookPriceBy10 = updateBookPriceBy10