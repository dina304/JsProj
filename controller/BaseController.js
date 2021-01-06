function isAlive(req,res) {
    res.status(200).send("Alive");
}
module.exports={ isAlive:isAlive};
