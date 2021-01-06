const dbConnector = require("./DBConnector");
const config = require("config");
const dbConfig = config.get("db");

async function executeQuery(startTime, endTime) {
    const dbName = dbConfig.get("dbName");
    let client;
    try {
        client = await dbConnector.getConnection();
        const db = client.db(dbName);
        const query = {$and: [{startDate: {$gt: startTime}}, {endDate: {$lt: endTime}}]};
        const result = await db.collection(dbConfig.get("collectionName")).find(query).toArray();
        return result;
    } catch (e) {
        throw e;
    }
}

module.exports = {executeQuery: executeQuery};
