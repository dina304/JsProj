const config = require("config");
const url = config.get("db").get("url");
const mongoClient = require('mongodb').MongoClient;
let mongodb;

async function getConnection() {
    if (!mongodb) {
        try {
            const client = await mongoClient.connect(url, {poolSize: 10});
            mongodb = client;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
    return mongodb;
}

module.exports = {getConnection: getConnection};
