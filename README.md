# 🌈 Animated Landing Page

A beautifully animated, gradient-rich landing page built with **Next.js** and **Tailwind CSS** — perfect for modern web presentations, portfolios, or startup homepages.

## 🖼️ Preview
![Main Page](https://files.catbox.moe/fa6wuj.gif)

---

## ✨ Features

- ⚡ Ultra-fast performance with Next.js  
- 🌈 Smooth animated gradients and transitions  
- 🎨 Styled using Tailwind CSS 3+  
- 📱 Fully responsive across all devices  
- 🧱 Clean component structure (TypeScript + modular)  
- 🔧 Easy to deploy on any VPS (aaPanel, cPanel, etc.)  

---

## 📂 Folder Structure

```
animation-landing-page/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   └── NavBar.tsx
│   ├── pages/
│   │   ├── api/...
├── │   ├── _app.tsx
│   │   ├── index.tsx
│   │   └── _document.tsx
│   └── styles/
│       └── global.css
│       
│   
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
├── README.md
└── tailwind.css
```

---

## 🚀 Quick Start (Local Development)

1. **Clone the repository:**

```bash
git clone https://github.com/isyrae/Animated-Landing-Page.git
cd animation-landing-page
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start development server:**

```bash
npm run dev
```

Now open `http://localhost:3000` to view it in the browser.

---

## 🏗️ Production Build

To generate a production build:

```bash
npm run build
```

Then to preview:

```bash
npm start
```

App will run on `http://localhost:3000`

---

## 💡 Deploying on VPS (aaPanel)

Want to run this project live using your own VPS and **aaPanel**? Here’s how:

### 🔧 1. Install & Build

```bash
npm install
npm run build
```

### 🔁 2. Keep it Running with PM2

```bash
npm install -g pm2
pm2 start "npm start" --name animation-site
pm2 save
pm2 startup
```

### 🌐 3. Reverse Proxy (aaPanel)

In **aaPanel**:  
- Go to **Website** > your domain  
- Click **Reverse Proxy**  
  - Target URL: `http://127.0.0.1:3000`  
  - Path: `/`  
- Enable SSL (optional, but recommended)

You're live! 🥳

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [aaPanel](https://www.aapanel.com/)  
- [PM2](https://pm2.keymetrics.io/)  

---

## 📝 License

This project is licensed under the MIT License — feel free to fork, customize, and use in your own projects.

---

## 🙌 Show Some Love

If you like this project, feel free to ⭐ the repo or contribute!

---
