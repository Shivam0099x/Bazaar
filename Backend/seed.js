import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/user.model.js";
import Product from "./models/product.model.js";
import {connectDb} from "./lib/db.js";

dotenv.config();

await connectDb();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password123", salt);

    await User.create({
      name: "Admin User",
      email: "admin@bazaar.com",
      password: hashedPassword,
      role: "admin",
    });

    const products = [
      {
        name: "Wireless Noise-Cancelling Headphones",
        description:
          "Immersive sound experience with advanced active noise cancellation.",
        price: 299.99,
        category: "Electronics",
        stock: 15,
        imageUrl:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.8,
        numReviews: 24,
      },
      {
        name: "Minimalist Modern Chair",
        description:
          "A stylish and comfortable addition to any contemporary living room.",
        price: 150.0,
        category: "Furniture",
        stock: 30,
        imageUrl:
          "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.2,
        numReviews: 12,
      },
      {
        name: "Professional DSLR Camera",
        description:
          "Capture stunning moments with high-resolution clarity and speed.",
        price: 1199.99,
        category: "Electronics",
        stock: 8,
        imageUrl:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.9,
        numReviews: 50,
      },
      {
        name: "Classic White Sneakers",
        description:
          "Versatile and comfortable, a staple for any casual outfit.",
        price: 85.0,
        category: "Clothing",
        stock: 50,
        imageUrl:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.5,
        numReviews: 89,
      },
      {
        name: "Smart Fitness Watch",
        description:
          "Track your health, workouts, heart rate, and sleep with this stylish smartwatch.",
        price: 199.99,
        category: "Electronics",
        stock: 25,
        imageUrl:
          "https://images.unsplash.com/photo-1510017803434-a899398421b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.6,
        numReviews: 41,
      },
      {
        name: "Ergonomic Office Desk",
        description:
          "Spacious wooden office desk with a modern design, perfect for work or study.",
        price: 349.99,
        category: "Furniture",
        stock: 12,
        imageUrl:
          "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.4,
        numReviews: 18,
      },
      {
        name: "Leather Backpack",
        description:
          "Premium leather backpack with multiple compartments for laptops and daily essentials.",
        price: 89.99,
        category: "Accessories",
        stock: 35,
        imageUrl:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.7,
        numReviews: 56,
      },
      {
        name: "Bluetooth Portable Speaker",
        description:
          "Compact wireless speaker with deep bass, crystal-clear sound, and 12-hour battery life.",
        price: 79.99,
        category: "Electronics",
        stock: 40,
        imageUrl:
          "https://images.unsplash.com/photo-1507878866276-a947ef722fee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.5,
        numReviews: 63,
      },
      {
        name: "Ceramic Coffee Mug Set",
        description:
          "Elegant set of four ceramic coffee mugs, microwave and dishwasher safe.",
        price: 34.99,
        category: "Home & Kitchen",
        stock: 60,
        imageUrl:
          "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ratings: 4.8,
        numReviews: 27,
      },
    ];

    await Product.insertMany(products);

    console.log("✅ Data Imported Successfully!");
    process.exit(0);
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();
