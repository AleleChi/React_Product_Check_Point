# 🛍️ React Product Card App

A sleek and responsive React application that showcases a product using reusable components and modern UI styling with React Bootstrap.

---

## 🚀 Project Overview

This project demonstrates the use of **React components**, **props**, and **JSX** to build a modular UI. A product is displayed inside a stylish card, with separate components handling different parts of the UI.

---

## ✨ Features

* Component-based architecture
* Reusable UI components
* Clean and modern card design using React Bootstrap
* Dynamic greeting message
* Conditional rendering of user image
* Organized project structure

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Name.js
│   ├── Price.js
│   ├── Description.js
│   └── Image.js
│
├── product.js
├── App.js
└── main.jsx
```

---

## ⚙️ Setup & Installation

1. Clone the repository:

```bash
git clone <https://github.com/AleleChi/React_Product_Check_Point.git>
cd <project-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Install React Bootstrap:

```bash
npm install react-bootstrap bootstrap
```

4. Start the development server:

```bash
npm run dev
```

---

## 🧩 Components Breakdown

### 1. `product.js`

Contains a JSON object with:

* Product name
* Price
* Description
* Image URL

---

### 2. UI Components

Each component imports the product object and renders a specific detail:

* **Name.js** → Displays product name
* **Price.js** → Displays product price
* **Description.js** → Displays product description
* **Image.js** → Displays product image

---

### 3. `App.js`

* Imports all components
* Uses React Bootstrap `Card` to structure the UI
* Displays all product details
* Shows a personalized greeting message
* Conditionally renders an image if a name is provided

---

## 🎨 Styling

* Built using **React Bootstrap** for responsiveness
* Custom styling can be added via CSS or inline styles
* Focus on clean layout, spacing, and visual hierarchy

---

## 👤 Personalization Feature

```js
const firstName = "YourName";
```

* If `firstName` exists → Displays:

  * "Hello, YourName!"
  * A profile image
* If not → Displays:

  * "Hello, there!"

---

## 🌐 Live Demo

👉 Netlify Link: *(Add your deployed link here)*

---

## 💡 Future Improvements

* Add animations (hover effects, transitions)
* Fetch product data from an API
* Add multiple product cards
* Implement dark/light mode
* Improve responsiveness for all screen sizes

---

## 🛠️ Tech Stack

* React (Vite)
* React Bootstrap
* JavaScript (ES6+)
* CSS

---

## 📸 Preview

*(You can add a screenshot here)*

---

## 🤝 Acknowledgements

This project was built as part of a React learning checkpoint to practice components, props, and JSX.

---

## 📄 License

This project is open-source and free to use.

---

💻 Happy Coding!
