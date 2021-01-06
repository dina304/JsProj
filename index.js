const express = require("express");
const app = express();
const routes = require("./routes/Routes");

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
app.use("/", routes);
app.use(express.static("public"));


