//const connectDB =require("./config/db");
const connection=require("./config/db");
const product=require("./models/p");
const pjson=require("./data.json");
require("dotenv").config();

const start =async () => {
try {
    await connection
    //(process.env.url);
    await product.create(pjson);
    console.log("success");
} catch (error) {
    console.log(error);
}
};

start();