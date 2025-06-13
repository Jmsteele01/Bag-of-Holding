# 🧙 Bag of Holding

A full-stack MERN inventory manager for Dungeons & Dragons 5e parties. Quickly browse a shared database of magic items and add them to your group's inventory. Designed to help players and DMs stay organized during campaigns.

---

## 📚 Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Acknowledgements](#acknowledgements)
- [Contributing](#contributing)
- [License](#license)
- [Related Projects](#related-projects)

---

## 📝 Description

Bag of Holding is a practical inventory manager built with the MERN stack that allows users to:

- View a list of common equipment and magic items.
- Add items from the database into their party's inventory.
- Remove items as they are consumed, traded, or dropped.
- Eventually, fetch randomized item data from a 3rd-party D&D API (coming soon).

The app was built as a capstone project for a full-stack JavaScript course, focusing on CRUD operations, API integration, React hooks, and MongoDB data modeling.

---

## ⚙️ Technologies Used

### Frontend
- React
- React Router DOM
- Vite
- JavaScript (ES6+)
- CSS (custom styling)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS
- Morgan

### Additional Acknowledgements
- Dungeons and Dragons System Reference Document 5.2.1 
- D&D5E compatable

---

## 🔧 Features

- ✅ Full Create, Read, Update, Delete (CRUD) capabilities
- ✅ MongoDB database with separate collections for base items and player inventory
- ✅ React frontend with routing (`react-router-dom`)
- ✅ React hooks: `useState`, `useEffect` (and `useReducer` soon)
- ✅ RESTful backend with modular route files
- ✅ 404 "Not Found" page for routing errors
- ⏳ Upcoming: integration with D&D 5e API

---

## 🚀 Installation

1. **Clone the repositories**

```bash
git clone https://github.com/your-username/Bag-of-Holding-FE.git
git clone https://github.com/your-username/Bag-of-Holding-BE.git