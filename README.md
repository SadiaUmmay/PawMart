🐕 PawMart — Pet Adoption & Supply Portal

PawMart is a community-driven MERN platform where pet owners, breeders, and pet shops can list pets for adoption or sell pet supplies such as food, toys, accessories, and healthcare products. Users can explore listings, place adoption/orders, manage their own listings, and track orders through a personalized dashboard.

🔗 Live Site URL

Client: https://pawmart-adoption.netlify.app/
Server: https://backend-five-mu-76.vercel.app/

⭐ Key Features

🐾 Browse pets available for adoption and explore pet supplies

🧑‍💻 User dashboard for managing listings & orders

🔐 Firebase authentication (Email/Password + Google Sign-in)

🛒 Seamless ordering system with modal checkout

📝 Role-based pages using private routes

🚀 Fully responsive modern UI built with React & Tailwind

📄 PDF report download for user orders

🎯 No lorem text, no browser-default alerts — all custom toasts

🧰 Tech Stack
Frontend

React

React Router

Tailwind CSS + DaisyUI

Firebase Authentication

Axios

React Hot Toast

jsPDF + AutoTable

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

CORS

🧩 Layout Structure
Navbar
Before Login:

Home

Pets & Supplies

Login / Register

After Login:

Home

Pets & Supplies

Add Listing

My Listings

My Orders

Profile Avatar (Logout)

Footer

Logo + Site Name

Short description:
“PawMart connects local pet owners and buyers for adoption and pet care products.”

Quick Links

Copyright

Note: Navbar & Footer are visible on all pages except the 404 page.

🏡 Pages & Core Functionalities
🏠 Home Page (Public)
1️⃣ Banner Section

3+ slider images

Meaningful taglines:

“Find Your Furry Friend Today!”

“Adopt, Don’t Shop — Give a Pet a Home.”

“Because Every Pet Deserves Love and Care.”

2️⃣ Category Section (4 Cards)

Pets (Adoption)

Pet Food

Accessories

Pet Care Products

Each card routes to:
/category-filtered-product/:categoryName

3️⃣ Recent Listings (Latest 6 from MongoDB)

Each card includes:

Image

Name

Category

Price / “Free for Adoption”

Location

“See Details” button

4️⃣ Extra Sections

Why Adopt from PawMart?

Meet Our Pet Heroes (3–4 profiles)

🔐 Authentication (Firebase)
Login Page

Email

Password

Login button

Google login

Link to Register

Register Page

Name

Email

Password (Validation: 1 uppercase, 1 lowercase, min 6 chars)

Photo URL

Google register

Link to Login

✓ Use react-hot-toast or SweetAlert2 for messages.
✓ No default alerts.
✓ No email verification required.

🧺 Add Listing Page (Private)

Fields:

Product/Pet Name

Category (Pets, Food, Accessories, Care Products)

Price (auto 0 if category = Pets)

Location

Description

Image URL

Date

Email (auto-filled from user)

After submit:

Save to MongoDB

Show custom toast

🐩 Pets & Supplies Page (Public)

Displays all listings in a 3-column grid.
Each card shows:

Image

Name

Category

Price

Location

“See Details”

Filters:

Filter by category

🐕 Listing Details Page (Private)

Shows:

Name

Category

Owner Email

Description

Price

Location

Image

Button: Adopt / Order Now

Opens an Order Modal with fields:

Buyer Name (readonly)

Buyer Email (readonly)

Product ID

Product Name

Quantity (1 for pets)

Price

Address

Phone

Date

Notes

After submit:

Save to MongoDB

Show success toast

🐾 My Listings Page (Private)

Shows user’s own listings in a table view.

Features:

Update button (modal or new route)

Delete with confirmation

Only user-created data is displayed

🧾 My Orders Page (Private)

Displays user’s orders in a table view.

Shows:

Product/Listing Name

Price

Quantity

Address

Date

Phone

Feature:

Download Report

Exports the user's order table as a PDF
(using jsPDF + AutoTable)

💡 Additional Features

Dynamic page titles per route

Graceful 404 page (without navbar & footer)

Loading spinners

Fully responsive UI

All CRUD actions show toast notifications

No redirect-to-login issue on reloading private routes

Firebase domain authorization correctly configured
