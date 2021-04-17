const mongoose = require('mongoose')

/***
 * Connects to the mongo database.
 */
const connectMongo = async () => {
    try {
        const mongo_uri = process.env.MONGO_URI
        const conn = await mongoose.connect(mongo_uri, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error)
        process.exit(1)
    }
}

module.exports = connectMongo