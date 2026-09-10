
const { app } = require(".");
const { connectDb } = require("./Config/db");


const PORT=5451
app.listen(PORT,async () => {
    await connectDb();
    console.log("ecommerce api listing on port : ",PORT);  
})
