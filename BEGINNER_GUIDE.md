# Web3 Portfolio - Beginner's Complete Guide

## Step-by-Step Tutorial for Building Your Portfolio from Scratch

---

## Table of Contents

1. [What You'll Build](#what-youll-build)
2. [Prerequisites](#prerequisites)
3. [Project Setup](#project-setup)
4. [File Structure](#file-structure)
5. [Step 1: HTML Basics](#step-1-html-basics)
6. [Step 2: CSS Styling](#step-2-css-styling)
7. [Step 3: JavaScript](#step-3-javascript)
8. [Step 4: Add Your Content](#step-4-add-your-content)
9. [Step 5: Deploy to Internet](#step-5-deploy-to-internet)
10. [Troubleshooting](#troubleshooting)

---

## What You'll Build

By the end of this tutorial, you'll have:

✅ A **professional portfolio website**  
✅ **Mobile-friendly** design (works on phones)  
✅ **Dark futuristic theme** (black & white style)  
✅ **Animated sections** (smooth animations)  
✅ **Live on the internet** with your own domain  

**Example:** [yourname.com](https://yourname.com)

---

## Prerequisites

### What You Need to Know

| Skill Level | Required |
|-------------|----------|
| HTML | Basic (tags, structure) |
| CSS | Basic (colors, fonts) |
| JavaScript | None (optional) |

### What You Need to Have

- [ ] A computer (Windows, Mac, or Linux)
- [ ] Text editor (VS Code recommended)
- [ ] Internet connection
- [ ] GitHub account (free)
- [ ] Vercel account (free)

### Time Required

- **Beginner:** 2-3 hours
- **Experienced:** 30-60 minutes

---

## Project Setup

### Step 1: Create Project Folder

1. Create a new folder on your computer:
   ```
   portfolio/
   ```

2. Inside this folder, create these subfolders:
   ```
   portfolio/
   ├── css/
   ├── js/
   ├── images/
   └── icons/
   ```

### Step 2: Install VS Code (Optional but Recommended)

1. Download from: [code.visualstudio.com](https://code.visualstudio.com)
2. Install on your computer
3. Open your `portfolio` folder in VS Code

---

## File Structure

Your final project should look like this:

```
portfolio/
├── index.html              # Main website file
├── css/
│   └── style.css          # All design styles
├── js/
│   └── main.js            # Interactive features
├── images/
│   ├── logo.jpg           # Your logo
│   ├── project1.png       # Project screenshots
│   └── tweet1.png         # Tweet screenshots
├── icons/
│   └── favicon.ico        # Website icon
└── README.md              # Project description
```

---

## Step 1: HTML Basics

### What is HTML?

HTML (HyperText Markup Language) is the structure of your website. Think of it like the skeleton of a body.

### Create index.html

1. In your `portfolio` folder, create a file called `index.html`
2. Open it in VS Code
3. Copy and paste this code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio by YourName</title>
    
    <!-- Bootstrap CSS (makes things look nice) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
    
    <!-- Your custom styles -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    
    <!-- Navigation Menu -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#home">YOURNAME</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section (First thing people see) -->
    <section id="home" class="hero-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h1>Hi! I'm <span class="gradient-text">YourName</span></h1>
                    <p>Web3 Content Creator & Builder</p>
                    <a href="#contact" class="btn btn-primary">Get in Touch</a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about">
        <div class="container">
            <h2>About Me</h2>
            <p>Write about yourself here...</p>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects">
        <div class="container">
            <h2>My Projects</h2>
            <!-- Add your projects here -->
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <div class="container">
            <h2>Contact</h2>
            <p>Your email, social links, etc.</p>
        </div>
    </section>

    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- Your custom JavaScript -->
    <script src="js/main.js"></script>
</body>
</html>
```

### Understanding the HTML

| Tag | What it does |
|-----|--------------|
| `<!DOCTYPE html>` | Tells browser this is HTML5 |
| `<html>` | Root element of page |
| `<head>` | Contains meta information |
| `<body>` | Contains visible content |
| `<nav>` | Navigation menu |
| `<section>` | A section of content |
| `<h1>`, `<h2>` | Headings (h1 is biggest) |
| `<p>` | Paragraph of text |
| `<a>` | Link to another page |
| `<div>` | Container for grouping elements |

---

## Step 2: CSS Styling

### What is CSS?

CSS (Cascading Style Sheets) makes your website look good. It's like the clothes and makeup on the skeleton.

### Create style.css

1. In your `css` folder, create a file called `style.css`
2. Open it in VS Code
3. Copy and paste this code:

```css
/* ===== COLORS ===== */
:root {
    --dark-bg: #000000;           /* Black background */
    --dark-card: #111111;         /* Dark gray cards */
    --text-primary: #ffffff;      /* White text */
    --text-secondary: #aaaaaa;    /* Gray text */
    --accent-color: #ff0000;      /* Red accent */
}

/* ===== BASIC STYLES ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--dark-bg);
    color: var(--text-primary);
    line-height: 1.6;
}

/* ===== NAVIGATION ===== */
.navbar {
    background: rgba(0, 0, 0, 0.95);
    padding: 1rem 0;
}

.navbar-brand {
    font-size: 1.5rem;
    font-weight: 700;
}

/* ===== HERO SECTION ===== */
.hero-section {
    min-height: 100vh;
    padding-top: 100px;
    display: flex;
    align-items: center;
}

.hero-section h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero-section p {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

/* ===== BUTTONS ===== */
.btn-primary {
    background: linear-gradient(135deg, #ffffff 0%, #888888 100%);
    border: none;
    padding: 0.75rem 2rem;
    font-weight: 600;
    border-radius: 8px;
    color: #000000;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
}

/* ===== SECTIONS ===== */
section {
    padding: 80px 0;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

/* ===== MOBILE STYLES ===== */
@media (max-width: 767px) {
    .hero-section h1 {
        font-size: 1.75rem;
    }
    
    .btn-primary {
        width: 100%;
    }
}

@media (max-width: 575px) {
    .hero-section {
        padding-top: 85px;
    }
    
    h2 {
        font-size: 1.75rem;
    }
}
```

### Understanding the CSS

| Property | What it does | Example |
|----------|--------------|---------|
| `color` | Text color | `color: #ffffff;` |
| `background-color` | Background color | `background-color: #000000;` |
| `padding` | Space inside element | `padding: 20px;` |
| `margin` | Space outside element | `margin: 10px;` |
| `font-size` | Text size | `font-size: 16px;` |
| `border-radius` | Rounded corners | `border-radius: 8px;` |
| `@media` | Mobile styles | `@media (max-width: 767px)` |

---

## Step 3: JavaScript

### What is JavaScript?

JavaScript makes your website interactive. It's like the muscles that make the skeleton move.

### Create main.js

1. In your `js` folder, create a file called `main.js`
2. Open it in VS Code
3. Copy and paste this code:

```javascript
// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    });
    
    // ===== REVEAL ELEMENTS ON SCROLL =====
    const revealElements = document.querySelectorAll('.project-card');
    
    window.addEventListener('scroll', () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight * 0.85) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });
    
});
```

### Understanding the JavaScript

| Function | What it does |
|----------|--------------|
| `addEventListener` | Listens for actions (click, scroll) |
| `scrollY` | How far user scrolled |
| `classList.add` | Adds CSS class |
| `scrollIntoView` | Smooth scroll to element |
| `getBoundingClientRect` | Gets element position |

---

## Step 4: Add Your Content

### Replace Placeholder Text

1. Open `index.html`
2. Find text like "YourName" and replace with your name
3. Find "Write about yourself here" and add your bio
4. Add your projects in the Projects section

### Add Your Images

1. Save your logo as `logo.jpg` in `images/` folder
2. Save project screenshots in `images/` folder
3. Update image paths in HTML:

```html
<!-- Before -->
<img src="images/project.png" alt="Project">

<!-- After -->
<img src="images/my-awesome-project.png" alt="My Project">
```

### Update Colors (Optional)

If you want different colors, edit `css/style.css`:

```css
:root {
    --dark-bg: #000000;           /* Change this */
    --accent-color: #ff0000;      /* Change this */
}
```

---

## Step 5: Deploy to Internet

### Part 1: Upload to GitHub

1. **Create GitHub Account**
   - Go to [github.com](https://github.com)
   - Click "Sign up"
   - Follow the steps

2. **Create New Repository**
   - Click the "+" icon (top right)
   - Select "New repository"
   - Name it: `portfolio`
   - Make it "Public"
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag all your files:
     - `index.html`
     - `css/style.css`
     - `js/main.js`
     - `images/` folder
   - Click "Commit changes"

### Part 2: Connect to Vercel

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub"

2. **Import Your Project**
   - Click "Add New Project"
   - Select your `portfolio` repository
   - Click "Import"

3. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site is LIVE! 🎉

### Part 3: Add Custom Domain (Optional)

1. **Buy a Domain**
   - Go to any domain registrar (Namecheap, GoDaddy, etc.)
   - Search for your name (e.g., `yourname.com`)
   - Purchase the domain

2. **Connect to Vercel**
   - In Vercel, go to your project
   - Click "Settings" → "Domains"
   - Add your domain
   - Vercel will show DNS settings

3. **Update DNS**
   - Go to your domain registrar
   - Find DNS settings
   - Add these records:

   | Type | Name | Value |
   |------|------|-------|
   | A | @ | 76.76.21.21 |
   | CNAME | www | cname.vercel-dns.com |

4. **Wait for Propagation**
   - DNS changes take 24-48 hours
   - Your site will be available at `yourname.com`

---

## Troubleshooting

### Problem: Website looks broken on mobile

**Solution:** Make sure you have this in `<head>`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Problem: Images not showing

**Solution:** Check:
1. Image file exists in `images/` folder
2. File name matches exactly (case-sensitive!)
3. Path is correct: `src="images/filename.png"`

### Problem: Styles not working

**Solution:** Check:
1. `style.css` file exists in `css/` folder
2. Link is correct: `<link rel="stylesheet" href="css/style.css">`
3. No typos in CSS

### Problem: Vercel deployment failed

**Solution:**
1. Check GitHub repository is public
2. Make sure `index.html` is in root folder (not inside another folder)
3. Check Vercel build logs for errors

### Problem: Domain not working

**Solution:**
1. DNS changes take 24-48 hours
2. Check DNS settings are correct
3. Try clearing browser cache (Ctrl+Shift+R)

---

## Quick Reference

### Common HTML Tags

```html
<h1>Big heading</h1>
<h2>Medium heading</h2>
<p>Paragraph of text</p>
<a href="url">Link text</a>
<img src="image.jpg" alt="Description">
<div>Container</div>
<button>Click me</button>
```

### Common CSS Properties

```css
color: #ffffff;              /* Text color */
background-color: #000000;   /* Background color */
padding: 20px;               /* Inner space */
margin: 10px;                /* Outer space */
font-size: 16px;             /* Text size */
border-radius: 8px;          /* Rounded corners */
display: flex;               /* Flexbox layout */
```

### File Paths

| Path | Meaning |
|------|---------|
| `css/style.css` | File in css folder |
| `../index.html` | Go up one folder |
| `/images/logo.jpg` | From root folder |
| `https://example.com` | External website |

---

## Next Steps

### What to Learn Next

1. **More CSS** - Flexbox, Grid, Animations
2. **More JavaScript** - DOM manipulation, Events
3. **More HTML** - Semantic HTML, Forms
4. **Version Control** - Git basics

### Resources

- [freeCodeCamp](https://freecodecamp.org) - Free coding lessons
- [MDN Web Docs](https://developer.mozilla.org) - Web documentation
- [CSS-Tricks](https://css-tricks.com) - CSS tutorials
- [JavaScript.info](https://javascript.info) - JavaScript guide

---

## Congratulations! 🎉

You've built and deployed your own portfolio website!

**What you accomplished:**
- ✅ Learned HTML, CSS, and JavaScript basics
- ✅ Created a professional portfolio
- ✅ Made it mobile-friendly
- ✅ Deployed it to the internet
- ✅ Connected a custom domain

**Share your portfolio:**
- Add it to your resume
- Share on social media
- Include in job applications

**Keep learning and building!** 🚀

---

**Author:** Anatolii Graanit  
**Date:** March 2026  
**Version:** 1.0

---

*Need help? Check the troubleshooting section or reach out!*
