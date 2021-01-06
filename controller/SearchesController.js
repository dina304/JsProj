const queryHandler = require("../db/QueryHanlder.js");
const csvHandler = require("../csv/CsvHandler.js");
const config = require("config");

//this function return link to file before it was created
// file will create asynchronously and then will be published in the provided link
function getPrevSearch(req, res, next) {
    const startTime = Number(req.query.startTime) ? Number(req.query.startTime) : res.status(404).send("bad query params");
    const endTime = Number(req.query.endTime) ? Number(req.query.endTime) : res.status(404).send("bad query params");
    const fullFileName = csvHandler.getFileName(req);
    if (fullFileName) {
        generateFile(startTime, endTime,fullFileName[0])
        res.send("your file " + fullFileName[1] + " will be ready wth an several sec in the follow path");
    } else {
        res.status(500).send("failed to create file name- config missing");
    }
}

async function generateFile(startTime, endTime,fileName) {
    try {
        const data = await queryHandler.executeQuery(startTime, endTime)
        await csvHandler.addToCsv(data,fileName);
    } catch (e) {
        console.error(e);
    }
}

module.exports = {getPrevSearch: getPrevSearch};
