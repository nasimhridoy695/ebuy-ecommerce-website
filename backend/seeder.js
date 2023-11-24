import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/poductModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config(); // to use .env file

connectDB();

const importData = async () => {
    try {
        // Clear all data
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
    
        // Insert users
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
    
        // Insert products
        const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser };
        });
        await Product.insertMany(sampleProducts);
    
        console.log("Data imported!".green.inverse);
        process.exit();
    } catch (error) {
        console.log(`Error: ${error.message}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => { //this is called by -d
    try {
        // Clear all data
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
    
        console.log("Data destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.log(`Error: ${error.message}`.red.inverse);
        process.exit(1);
    }
};

if(process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
};