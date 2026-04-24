# 💜 Eric & Maria — Wedding Website

A complete, multi-page wedding announcement website built for GitHub Pages.
Purple & gold, romantic vineyard theme. All content managed from a single config file.

---

## 🚀 Quick Start (5 minutes to live site)

### 1. Upload to GitHub
1. Create a new GitHub repository (e.g., `eric-and-maria-wedding`)
2. Upload all files maintaining the folder structure:
   ```
   /
   ├── index.html
   ├── party.html
   ├── weekend.html
   ├── registry.html
   ├── married.html
   ├── messages.html
   ├── css/
   │   └── style.css
   ├── js/
   │   ├── config.js
   │   └── shared.js
   └── images/
       └── (your photos go here)
   ```
3. Go to **Settings → Pages → Source → main branch / root**
4. Your site will be live at: `https://yourusername.github.io/repo-name/`

---

## ✏️ How to Customize Everything

### The Golden Rule
**ALL content lives in `js/config.js` — you almost never need to touch the HTML files.**

Open `js/config.js` and you'll find clearly labeled sections for:
- Names, date, colors
- Every photo path
- All text on every page
- Event details, links, registry URLs

---

## 📷 Changing Photos

### Option A: Use your GitHub images folder (Recommended)
1. Upload photos to the `/images/` folder in your GitHub repo
2. Open `js/config.js`
3. Find the `photos:` section and update the paths:
   ```js
   photos: {
     hero: "images/your-hero-photo.jpg",
     howWeMet: "images/how-we-met.jpg",
     // etc.
   }
   ```
4. Save and push — the site updates automatically

### Option B: Use external URLs
```js
hero: "https://example.com/your-photo.jpg"
```

### Photo Size Recommendations
| Section         | Recommended Size  |
|-----------------|-------------------|
| Hero images     | 1400 × 800 px     |
| Story sections  | 800 × 600 px      |
| Party portraits | 400 × 500 px      |
| Thank you       | 600 × 700 px      |
| Gallery         | 800 × 600 px      |

---

## 🎨 Changing Colors

In `js/config.js`, find the `colors:` section:
```js
colors: {
  primary:   "#6B3FA0",   // Main purple — change for different theme
  secondary: "#C9A84C",   // Gold accents
  accent:    "#9B6FD4",   // Lighter purple
  dark:      "#1a0f2e",   // Dark backgrounds
  light:     "#FAF6F0",   // Light backgrounds
  gold_light:"#EDD98A"    // Soft gold highlights
}
```
Change any hex value and the entire site updates.

---

## 💬 Setting Up Disqus (Messages Page)

1. Go to [disqus.com](https://disqus.com) → Create Account → Install Disqus on my site
2. Create a new site and copy your **shortname**
3. In `js/config.js`, find:
   ```js
   disqusShortname: "your-disqus-shortname"
   ```
4. Replace with your actual shortname, e.g.: `"eric-and-maria"`
5. The messages page will automatically load your Disqus comments section

---

## 📝 Pages Overview

| File             | Page            | Description                              |
|------------------|-----------------|------------------------------------------|
| `index.html`     | Our Story       | Hero, countdown, 3 story sections with floating hearts |
| `party.html`     | Wedding Party   | 5 bridesmaids, 5 groomsmen, 2 VIPs       |
| `weekend.html`   | The Weekend     | Events, travel, hotels, things to do, restaurants |
| `registry.html`  | Registry        | Amazon, PayPal, Venmo, thank you section |
| `married.html`   | We Are Married  | Gallery placeholders, updated after wedding |
| `messages.html`  | Messages        | Disqus comment board for guests          |

---

## 🔧 Using This as a Template

To reuse this for another couple:
1. Open `js/config.js`
2. Change `names`, `date`, `colors`, all `photos`, and all text
3. Done! Every page updates from the config.

---

## 💡 Tips

- **Images load slowly?** Compress photos to under 500KB using [squoosh.app](https://squoosh.app)
- **Custom domain?** Add a `CNAME` file with your domain name to the repo root
- **Countdown shows "We're Married!"?** Perfect — the timer auto-switches after the wedding date
- **Hearts too distracting?** In `index.html`, increase the `setInterval` value (default 1800ms) or reduce opacity in `css/style.css` in the `.heart` rule

---

Made with 💜 for Eric & Maria · September 25, 2027
