# 🎮 GTA 6 Landing Page

Welcome to the **GTA 6 Landing Page**, a modern and interactive web experience built with **React**, **GSAP**, and **Tailwind CSS**. This project simulates a high-quality, animated landing page for the much-anticipated release of Grand Theft Auto VI.

---

## 🚀 Live Demo

> 🔗 _Coming Soon..._  
> *( On [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/))*

---

## 📸 Screenshots


| ![Landing Screenshot](./screenshot/Landingpage.png) | ![Animation Screenshot](./screenshots/animation.png) |


---

## 🛠️ Tech Stack

- **React.js** – Frontend framework
- **GSAP (GreenSock)** – Powerful animation library
- **Tailwind CSS** – Utility-first CSS framework
- **JavaScript** – Core scripting language

---

## ✨ Features

- ⚡ Smooth GSAP-based animations on scroll and load
- 📱 Fully responsive design using Tailwind CSS
- 🧩 Clean and modular React components
- 📄 Simple and informative layout for GTA 6 teaser

---

## 📂 Folder Structure



---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/your-username/gta6-landing-page.git

# Navigate into the folder
cd gta6-landing-page

# Install dependencies
npm install

# Start development server
npm start

```

## 📌 Example Code Snippet

```
// HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section className="bg-black text-white h-screen flex items-center justify-center">
      <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold">
        Welcome to GTA 6
      </h1>
    </section>
  );
};

export default HeroSection;
```
