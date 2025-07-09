# 🔌 Extensions List

A responsive React + TypeScript application for listing browser extensions with support for **light/dark mode**, **status-based filtering** (All, Active, Inactive), and clean modular component structure.

## ✨ Features

- 🌗 **Theme Toggle** — Switch between Dark and Light Mode using CSS variables.
- 🗂️ **Filter Extensions** — View all, active, or inactive extensions.
- 💡 **Accessible Design** — Keyboard focus styles and semantic elements included.
- ⚛️ **Modern React** — Built with React, TypeScript, and CSS Modules.

---

## 📁 Folder Structure

src/
│
├── assets/ # Icons and images
├── component/
│ ├── Card.tsx # Single extension display
│ ├── CardSection.tsx # Grid layout for cards
│ ├── Header.tsx # App header with theme toggle
│ └── NavList.tsx # Tab filter component
│
├── data.json # Sample extension data
├── App.tsx # Root component
└── main.tsx # Entry point

yaml
Copy
Edit

---

## 🧑‍💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/extensions-list.git
cd extensions-list
2. Install dependencies
bash
Copy
Edit
npm install
3. Start the development server
bash
Copy
Edit
npm run dev
App will run on http://localhost:5173 (Vite default).

🧱 Built With
React + TypeScript

Vite — Fast dev environment

CSS Modules — Scoped styling

CSS Variables — Theming support

🌙 Light/Dark Mode Logic
Defined via CSS variables in :root (dark default).

.light-mode class toggled on <body> updates the theme.

Triggered from a button in Header.tsx.
