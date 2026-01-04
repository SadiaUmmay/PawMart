# 🐕 PawMart — Pet Adoption & Supply Portal

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/) 
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/) 
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

---

## 🔗 Live URLs

- **Client:** [https://pawmart-adoption.netlify.app/](https://pawmart-adoption.netlify.app/)  
- **Server:** [https://backend-five-mu-76.vercel.app/](https://backend-five-mu-76.vercel.app/)  

---

## ⭐ Key Features

- Browse pets for adoption and pet supplies (food, toys, accessories, healthcare products)  
- Personalized dashboard for managing listings & orders  
- Firebase Authentication: Email/Password + Google Sign-in  
- Seamless ordering system with modal checkout  
- Role-based private routes for secure pages  
- Fully responsive modern UI built with React, Tailwind & DaisyUI  
- Download user orders as PDF (jsPDF + AutoTable)  
- Custom toast notifications for all CRUD actions  

---

## 🧰 Tech Stack

**Frontend:**  
- React, React Router  
- Tailwind CSS + DaisyUI  
- Firebase Authentication  
- Axios, React Hot Toast  
- jsPDF + AutoTable  

**Backend:**  
- Node.js, Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  
- CORS  

---

## 🏡 Pages & Functionalities

### **Home Page (Public)**
- **Banner Slider:** 3+ images with taglines like *“Find Your Furry Friend Today!”*  
- **Category Section:** Pets (Adoption), Pet Food, Accessories, Pet Care Products → routes to `/category-filtered-product/:categoryName`  
- **Recent Listings:** Latest 6 from MongoDB with Image, Name, Category, Price, Location, “See Details”  
- **Extra Sections:** *“Why Adopt from PawMart?”* & *“Meet Our Pet Heroes”*  

### **Authentication (Firebase)**
- Login / Register with Email/Password & Google  
- Password validation: 1 uppercase, 1 lowercase, min 6 characters  
- Custom toasts (react-hot-toast / SweetAlert2)  

### **Add Listing (Private)**
- Fields: Name, Category, Price (auto 0 if Pet), Location, Description, Image URL, Date, User Email  
- Saves to MongoDB + custom toast  

### **Pets & Supplies Page (Public)**
- Grid display of all listings (3-column)  
- Filter by category  

### **Listing Details (Private)**
- Info: Name, Category, Owner Email, Description, Price, Location, Image  
- “Adopt / Order Now” → Modal with buyer info, quantity, address, phone, notes  
- Save order to MongoDB + success toast  

### **My Listings (Private)**
- Table of user-created listings  
- Update (modal/new route) & delete with confirmation  

### **My Orders (Private)**
- Table of user orders (Product Name, Price, Quantity, Address, Date, Phone)  
- Download orders as PDF  

---

## 💡 Additional Features

- Dynamic page titles  
- Graceful 404 page  
- Loading spinners  
- Fully responsive design  
- All CRUD actions with toast notifications  
- Private routes handled properly (no redirect issues on reload)  
- Firebase domain authorization correctly configured  

---

## 🧩 Layout Structure

**Navbar**  
- Before login: Home | Pets & Supplies | Login / Register  
- After login: Home | Pets & Supplies | Add Listing | My Listings | My Orders | Profile Avatar (Logout)  

**Footer**  
- Logo + Site Name  
- Short description: *“PawMart connects local pet owners and buyers for adoption and pet care products.”*  
- Quick Links & Copyright  

> Navbar & Footer visible on all pages except the 404 page.  

---

## 🚀 Future Improvements

- Add admin panel for managing all listings & users  
- Real-time chat between adopters and sellers  
- Payment integration for ordering products  

---

**Developed with ❤️ by [Ummay Jannat Sadia]**
