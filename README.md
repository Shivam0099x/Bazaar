# 🛒 BAZAAR Backend API

A **production-ready E-Commerce Backend** built with **Node.js**, **Express.js**, and **MongoDB**. The project provides a scalable REST API with secure JWT authentication, OTP-based email verification, role-based authorization, product management, order processing, image uploads, Razorpay payment integration (ITS PENDING FOR NOW), and automated email notifications using Nodemailer.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User Registration & Login
- OTP Email Verification using Nodemailer
- JWT Authentication
- Password Hashing with bcrypt
- Role-Based Authorization (Admin & User)
- Protected Routes

### 👤 User Features
- Register & Login
- Email Verification
- View User Profile
- Browse Products
- Place Orders
- View Order History

### 🛍️ Product Management
- Create Products (Admin)
- Update Products (Admin)
- Delete Products (Admin)
- View All Products
- View Single Product
- Product Categories
- Product Image Uploads

### 📦 Order Management
- Create Orders
- View User Orders
- Update Order Status (Admin)
- Order Tracking
- Order History

### 💳 Payment Integration (NOT COMPLETED)
- Razorpay Payment Gateway
- Secure Payment Verification
- Online Payment Processing

### ☁️ Image Upload
- Upload Product Images using Multer
- Cloudinary Image Storage
- Optimized Cloud Image Management

### 📧 Email Notifications
- OTP Verification Email during Registration
- Order Confirmation Email after Successful Order Placement
- Automated Email Delivery using Nodemailer

### 👨‍💼 Admin Features
- Manage Products
- Manage Orders
- Manage Users
- Dashboard APIs

---

# 🛠️ Tech Stack

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication & Security
- JWT (JSON Web Token)
- bcrypt

## File Upload
- Multer
- Cloudinary

## Payments
- Razorpay

## Email Service
- Nodemailer

---


# ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Shivam0099x/bazaar.git
```

### 2. Navigate to the project directory

```bash
cd bazaar
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

EMAIL_USER=
EMAIL_PASS=
```

### 5. Start the development server

```bash
npm run dev
or
npm run start
```

---


# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- OTP Email Verification
- Role-Based Authorization
- Protected Routes
- Environment Variables for Sensitive Credentials
- Secure Payment Verification

---

# 📚 REST APIs Included

- Authentication APIs
- User APIs
- Product APIs
- Category APIs
- Order APIs
- Payment APIs
- Admin APIs
- Email Notification APIs

---

# 🌟 Highlights

- Production-ready REST API Architecture
- Clean Project Structure
- Scalable Folder Organization
- Secure Authentication & Authorization
- Third-Party Integrations (Cloudinary, Razorpay, Nodemailer)
- Image Upload & Management
- Payment Gateway Integration
- Automated Email Notifications
- MongoDB Database Integration

---


## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub!
