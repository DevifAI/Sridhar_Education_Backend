# 📘 Sridhar Education LMS Backend

This is the backend for **Sridhar Education**, an LMS (Learning Management System) platform built with **Node.js**, **Express**, and **MongoDB**. It includes full authentication for users and admins, banner and announcement management, device change requests, OTP flows, and more.

---

## 🚀 Features

- 🔐 JWT + Refresh Token Auth for Users & Admins
- 📩 OTP-based Password Reset
- 🧾 Admin Management
- 🖼 Banner Carousel with max 3 entries
- 📢 Announcement System with tags and filtering
- 🔁 Device Change Request flow (admin-reviewed)
- 🌐 Role-based access separation
- 🧪 Pre-integrated API test suite (Postman/Hoppscotch ready)

---

## 🛠️ Tech Stack

- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **Auth**: JWT (access + refresh tokens)
- **Email**: Nodemailer (Gmail SMTP)
- **Environment**: dotenv
- **API Testing**: Postman / Hoppscotch

---

## ⚙️ Environment Variables (`.env`)

```env
NODE_ENV=development
PORT=8080
MONGO_URI=mongodb+srv://2022devify:Kf2UzN88WEFapAV7@sridhareducation.5xtjtmc.mongodb.net/SridharEducation
JWT_SECRET=sridhar_lms_development_secret
EMAIL_USER=devifaiaws@gmail.com
EMAIL_PASS=rkbjhpdgaquejmvo
