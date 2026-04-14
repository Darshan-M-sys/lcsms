const express=  require("express");
const adminRouter = express.Router();

const { AdminLogin } = require("../controllers/AdminLoginController");

adminRouter.post("/login",AdminLogin);


 
module.exports = adminRouter

