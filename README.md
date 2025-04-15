# Reactjs Gaming Website - Outlier AI Frontend UI Hackathon

<div align="center">
  <img src="https://github.com/user-attachments/assets/ab600f24-f4d9-4cef-8f1e-3fd9194afb30" alt="Project Banner">

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-GSAP-black?style=for-the-badge&logoColor=white&logo=greensock&color=88CE02" alt="greensock" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Framer_Motion-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF" alt="framer" />
  </div>
</div>

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Animation Components](#animation-components)
5. [Code Snippets](#code-snippets)
6. [Installation](#installation)
7. [Acknowledgments](#acknowledgments)

## 🎮 Introduction

This project was developed for the Outlier AI Frontend UI Hackathon, showcasing advanced animation techniques and modern UI design principles. Focused on creating an immersive gaming platform interface, it demonstrates the seamless integration of animations, video elements, and responsive design to deliver an exceptional user experience.

## 🚀 Key Features

- **Immersive Video Hero Section** - Dynamic video transitions with interactive elements that respond to user actions
- **Animated Preloader** - Engaging word cycling animation that builds anticipation before content reveals
- **3D Hover Effects** - Interactive elements with depth and dimension that respond to cursor movement
- **Clip Path Transitions** - Unique geometric shape transitions creating visual interest during scrolling
- **Magnetic UI Elements** - Interactive components that subtly follow cursor movement for an engaging experience
- **Scroll-Triggered Animations** - Elements that animate into view as users scroll through the content
- **Fully Responsive Design** - Seamless experience across all device sizes from mobile to desktop

## ⚙️ Tech Stack

- **React.js** - Component-based UI architecture
- **GSAP** - Advanced animation sequencing and control
- **Framer Motion** - Physics-based animations and transitions
- **Tailwind CSS** - Utility-first styling approach for rapid development

## ✨ Animation Components

### Preloader Component

The preloader uses Framer Motion to create a smooth, engaging loading experience with animated text cycling through gaming-related words ("Play", "Compete", "Win", "Level Up", etc.) and a custom SVG path animation for the reveal transition.

```jsx
<motion.div 
  variants={slideUp} 
  initial="initial" 
  exit="exit" 
  className="fixed h-screen w-screen flex items-center justify-center z-[99] bg-violet-300"
>
  <motion.p variants={opacity} initial="initial" animate="enter">
    <span className="block w-[10px] h-[10px] bg-white rounded-full mr-[10px]"></span>
    {words[index]}
  </motion.p>
  <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
  </svg>
</motion.div>
```

### Magnetic Component

Interactive UI elements that subtly follow the user's cursor, creating an engaging and playful interaction experience.

### Hero Section

The hero section utilizes GSAP for complex animation sequencing, including clip-path animations, video transitions, and scroll-triggered effects.

```jsx
useGSAP(() => {
  gsap.set("#video-frame", {
    clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
    borderRadius: "0% 0% 40% 10%",
  });
  gsap.from("#video-frame", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    borderRadius: "0% 0% 0% 0%",
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#video-frame",
      start: "center center",
      end: "bottom center",
      scrub: true,
    },
  });
});
```

## 🧩 Code Snippets

### Animation Definitions

```javascript
// Opacity animation 
export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 0.75,
    transition: {duration: 1, delay: 0.2}
  },
}

// Slide up animation
export const slideUp = {
  initial: {
    top: 0
  },
  exit: {
    top: "-100vh",
    transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
  }
}
```

### Interactive Button Component

```jsx
<RoundedButton
  backgroundColor="#D2FF72"
  className="text-black w-[170px] h-[170px] bg-yellow-300 rounded-full flex items-center justify-center cursor-pointer md:w-[180px] md:h-[180px]"
>
  <p className="m-0 text-[16px] flex items-center gap-1 relative z-[2] whitespace-nowrap">
    <TiLocationArrow className="text-2xl font-robert-regular" /> Watch trailer
  </p>
</RoundedButton>
```

## 🙏 Acknowledgments

This project draws inspiration from [Zentry](https://zentry.com/), an award-winning website renowned for its exceptional UI/UX design and animations. The project aims to reimagine gaming platform interfaces with similar attention to detail and animation quality while creating a unique experience specifically for the Outlier AI Frontend UI Hackathon.

---

Designed and developed with ❤️ for the Outlier AI Frontend UI Hackathon. 