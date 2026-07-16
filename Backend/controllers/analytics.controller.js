import Order from "../models/order.js";
import Product from "../models/product.model.js";
import Users from "../models/user.model.js";

export const getAdminStats = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments({});
    const totalProducts = await Product.countDocuments({});
    const totalUsers = await Users.countDocuments({ role: "user" });

    const orders = await Order.find({});
    const totalRevenue = orders.reduce((acc, item) => acc + item.totalAmount,0,);

    res.json({
      totalOrders,
      totalProducts,
      totalUsers,
      totalRevenue,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
