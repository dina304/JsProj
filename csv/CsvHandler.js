const config = require("config");
const fastcsv = require("fast-csv");
const fs = require("fs");


async function addToCsv(data,fileName) {
    const ws = fs.createWriteStream(fileName);
    await fastcsv.write(data, {headers: true}).pipe(ws);
}

function getFileName(req) {
    try {
        const fullURl = req.protocol + "://" + req.get("host");
        const date = new Date().getTime();
        const fileName = config.get("csv").get("fileFullPath") + date + ".csv";
        return [fileName,fullURl + "/" + fileName]
    } catch (e) {
        console.error(e);
        return ""
    }
}

module.exports = {addToCsv: addToCsv, getFileName: getFileName};
