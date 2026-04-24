/**
 * ============================================================
 *  WEDDING SITE CONFIG — EDIT EVERYTHING HERE
 *  All photos, names, dates, text, and links live in this file.
 *  You never need to dig into HTML to change content.
 * ============================================================
 */

const WEDDING = {

  // ── COUPLE ──────────────────────────────────────────────
  names: {
    partner1: "Eric",
    partner2: "Maria",
    combined: "Eric & Maria",       // Used in titles / nav
    hashtag: "#EricAndMaria2027"    // Social hashtag shown on site
  },

  date: {
    display: "September 25, 2027",   // Shown on site
    iso: "2027-09-25",               // Used by countdown timer
    time: "4:00 PM"
  },

  // ── COLORS (edit these if wedding colors change) ─────────
  // These map directly to CSS variables — changing here updates the whole site
  colors: {
    primary:   "#6B3FA0",   // Deep purple
    secondary: "#C9A84C",   // Warm gold
    accent:    "#9B6FD4",   // Lighter purple
    dark:      "#1a0f2e",   // Very dark purple (backgrounds)
    light:     "#FAF6F0",   // Warm off-white
    gold_light:"#EDD98A"    // Light gold for glows
  },

  // ── PHOTOS ──────────────────────────────────────────────
  // HOW TO CHANGE PHOTOS:
  //   1. Upload your photo to your GitHub repo's /images/ folder
  //   2. Change the path below to match your filename
  //      e.g.  "images/hero-couple.jpg"
  //   For external URLs: "https://example.com/photo.jpg"
  //
  // PLACEHOLDER images are currently set — replace with your own!

  photos: {
    // ── Page 1: Our Story ───────────────────────────────
    hero:         "images/hero-couple.jpg",         // Hero section — main couple photo
    howWeMet:     "images/how-we-met.jpg",           // How We Met section
    howItWent:    "images/how-it-went.jpg",          // How It Went section
    proposal:     "images/proposal.jpg",             // The Proposal section

    // ── Page 2: Wedding Party ───────────────────────────
    partyHero:    "images/party-hero.jpg",           // Wedding Party page hero

    // ── Page 3: The Weekend ─────────────────────────────
    weekendHero:  "images/weekend-hero.jpg",         // The Weekend page hero

    // ── Page 4: Registry ────────────────────────────────
    registryHero: "images/registry-hero.jpg",        // Registry page hero
    registryThank:"images/registry-thank-you.jpg",   // Thank you section photo

    // ── Page 5: We Are Married ──────────────────────────
    marriedHero:  "images/married-hero.jpg",         // Married page hero
    // Gallery photos — add as many as you want!
    marriedGallery: [
      "images/married-01.jpg",
      "images/married-02.jpg",
      "images/married-03.jpg",
      "images/married-04.jpg",
      "images/married-05.jpg",
      "images/married-06.jpg"
    ]
  },

  // ── PLACEHOLDER (shown when real photo not yet added) ───
  // This is a soft purple gradient used until you upload real photos
  placeholder: "https://placehold.co/800x600/6B3FA0/EDD98A?text=Photo+Coming+Soon",
  placeholderHero: "https://placehold.co/1400x800/1a0f2e/EDD98A?text=📷+Add+Your+Photo+Here",
  placeholderPortrait: "https://placehold.co/400x500/6B3FA0/EDD98A?text=Photo",
  placeholderSquare: "https://placehold.co/400x400/6B3FA0/EDD98A?text=Photo",

  // ── PAGE 1: OUR STORY ───────────────────────────────────
  story: {
    heroCaptions: "We're Getting Married!",
    heroSubtitle: "Join us as we begin our forever",

    howWeMet: {
      title: "How We Met",
      // ↓ Replace this text with your own story
      text: `Every great love story has a beginning. Ours started on a warm summer evening when fate decided to intervene in the most unexpected way. Write your story here — where you first saw each other, what you were thinking, that first conversation that made you realize something special was happening.`
    },

    howItWent: {
      title: "How It Went",
      // ↓ Replace this text with your own story
      text: `From that first meeting, something just clicked. Describe the early days of your relationship here — the first dates, the moments you knew this was real, the adventures you shared, the ways you grew together. Your guests will love hearing the details.`
    },

    proposal: {
      title: "The Proposal",
      // ↓ Replace this text with your own story
      text: `Then came the moment that changed everything. Tell the story of the proposal here — where it happened, how it was planned, whether it was a total surprise or something you'd both been anticipating. Don't forget to describe the ring and that first "Yes!"`
    }
  },

  // ── PAGE 2: WEDDING PARTY ───────────────────────────────
  // To change a wedding party member: edit name, role, and photo path
  // To add/remove: copy/paste a member block or delete one
  party: {
    heroCaption: "Meet Our People",
    heroSubtitle: "The ones who stand beside us",

    bridesmaids: [
      { name: "Bridesmaid Name", role: "Maid of Honor", photo: "", note: "Add a fun fact or how you know the bride!" },
      { name: "Bridesmaid Name", role: "Bridesmaid",    photo: "", note: "Add a fun fact or how you know the bride!" },
      { name: "Bridesmaid Name", role: "Bridesmaid",    photo: "", note: "Add a fun fact or how you know the bride!" },
      { name: "Bridesmaid Name", role: "Bridesmaid",    photo: "", note: "Add a fun fact or how you know the bride!" },
      { name: "Bridesmaid Name", role: "Bridesmaid",    photo: "", note: "Add a fun fact or how you know the bride!" }
    ],

    groomsmen: [
      { name: "Groomsman Name", role: "Best Man",    photo: "", note: "Add a fun fact or how you know the groom!" },
      { name: "Groomsman Name", role: "Groomsman",   photo: "", note: "Add a fun fact or how you know the groom!" },
      { name: "Groomsman Name", role: "Groomsman",   photo: "", note: "Add a fun fact or how you know the groom!" },
      { name: "Groomsman Name", role: "Groomsman",   photo: "", note: "Add a fun fact or how you know the groom!" },
      { name: "Groomsman Name", role: "Groomsman",   photo: "", note: "Add a fun fact or how you know the groom!" }
    ],

    vips: [
      { name: "Officiant Name", role: "Officiant",    photo: "", note: "The person making it all official!" },
      { name: "Ring Bearer Name", role: "Ring Bearer", photo: "", note: "The most important job of the day!" }
    ]
  },

  // ── PAGE 3: THE WEEKEND ─────────────────────────────────
  weekend: {
    heroCaption: "The Weekend",
    heroSubtitle: "Everything you need to know",

    welcomeParty: {
      title: "Welcome Party",
      date: "Friday, September 24, 2027",
      time: "7:00 PM",
      location: "Host's Home",          // ← Change to actual name / address
      address: "123 Vineyard Lane, Grandview, WA",
      description: "Kick off the weekend with us! Join family and close friends for a relaxed evening of food, drinks, and laughter the night before the big day. Dress is casual — come ready to celebrate!"
    },

    ceremony: {
      title: "The Wedding",
      date: "Saturday, September 25, 2027",
      time: "4:00 PM",
      location: "Venue Name Here",       // ← Change to your venue
      address: "456 Golden Vineyard Rd, Grandview, WA",
      description: "Please arrive 30 minutes early to be seated. The ceremony will be held outdoors among the vines at golden hour. Reception to follow immediately after with dinner, dancing, and toasts.",
      dresscode: "Black Tie Optional / Garden Formal",
      mapLink: "https://maps.google.com"  // ← Update to actual Google Maps link
    },

    afterParty: {
      title: "After Party",
      date: "Saturday, September 25, 2027",
      time: "10:00 PM",
      location: "After Party Venue",     // ← Change to actual location
      address: "789 Celebration Ave, Grandview, WA",
      description: "The party doesn't stop here! Join us for late-night bites, cocktails, and dancing for those who want to keep the celebration going."
    },

    brunch: {
      title: "Farewell Brunch",
      date: "Sunday, September 26, 2027",
      time: "10:30 AM",
      location: "Brunch Location",       // ← Change to actual location
      address: "321 Morning Glory Ln, Grandview, WA",
      description: "A relaxed morning-after brunch to say farewell and relive the highlights from the night before. Mimosas included!"
    },

    // ── Getting to Grandview ────────────────────────────
    travel: {
      intro: "Grandview is located in the beautiful Yakima Valley wine country of Washington State, approximately 2.5 hours from Seattle and 4 hours from Portland.",
      directions: {
        fromSeattle:  "Take I-90 East to SR-82 South toward Yakima. Continue on SR-82 to Exit 73 for Grandview. Total drive: approx. 2.5 hours.",
        fromPortland: "Take I-84 East to US-97 North, then connect to SR-82 West toward Grandview. Total drive: approx. 4 hours.",
        byAir:        "Closest airports: Yakima Air Terminal (YKM) — 30 min away. Tri-Cities Airport (PSC) — 35 min away. Seattle-Tacoma (SEA) — 2.5 hours."
      }
    },

    // ── Places to Stay ──────────────────────────────────
    hotels: [
      { name: "Wine Country Inn",          location: "Grandview, WA",      distance: "In town",       website: "#", note: "Our room block — mention Eric & Maria for a discount!" },
      { name: "Yakima Valley Hotel & Suites",location: "Sunnyside, WA",   distance: "10 min",        website: "#", note: "Great value, pool on-site" },
      { name: "Marriott Courtyard Yakima",  location: "Yakima, WA",        distance: "30 min",        website: "#", note: "Full amenities" },
      { name: "Cozy Vineyard Airbnb",       location: "Prosser, WA",       distance: "20 min",        website: "#", note: "Perfect for groups or families" }
    ],

    // ── Things To Do ────────────────────────────────────
    activities: [
      { name: "Yakima Valley Wine Trail",       type: "Wine Tasting",   description: "World-class wineries within a short drive of the venue." },
      { name: "Columbia River Gorge",           type: "Scenic Drive",   description: "Stunning views about 45 miles south — perfect for a Sunday drive." },
      { name: "Yakima Greenway",                type: "Outdoors",       description: "Walking and biking trails along the Yakima River." },
      { name: "Prosser Balloon Rally",          type: "Local Event",    description: "Check local event calendar for seasonal hot air balloon events." },
      { name: "Snipes Mountain Recreation Area",type: "Outdoors",       description: "Hiking and wildlife viewing, about 10 miles away." },
      { name: "Grandview Downtown",             type: "Local Charm",    description: "Explore the historic downtown, local shops, and murals." }
    ],

    // ── Where to Eat & Drink ────────────────────────────
    restaurants: [
      { name: "Dykstra House Restaurant",  type: "Fine Dining",   location: "Grandview", description: "Beloved local institution in a historic Victorian home." },
      { name: "Prosser Winery & Bistro",   type: "Wine Bar",      location: "Prosser",   description: "Excellent pairings, beautiful outdoor seating." },
      { name: "The Winemaker's Loft",      type: "Casual",        location: "Sunnyside", description: "Relaxed wine bar with local charcuterie boards." },
      { name: "Vintner's Inn",             type: "Pub & Grill",   location: "Grandview", description: "Great burgers, local beers, very welcoming." },
      { name: "Maya's Mexican Restaurant", type: "Mexican",       location: "Grandview", description: "Local favorite, fantastic food and margaritas." }
    ]
  },

  // ── PAGE 4: REGISTRY ────────────────────────────────────
  registry: {
    heroCaption: "Registry",
    heroSubtitle: "Your presence is our greatest gift",

    intro: "We are so grateful to have you share this milestone with us. If you would like to give a gift, we've created a registry at Amazon for home items we've been dreaming about. We've also included options to contribute to our honeymoon fund — every little bit means the world to us!",

    amazon: {
      label: "Amazon Registry",
      url: "https://www.amazon.com/wedding",   // ← Replace with your actual Amazon registry URL
      note: "Browse our curated list of home favorites — from kitchen essentials to cozy bedroom finds."
    },

    paypal: {
      label: "PayPal",
      url: "https://paypal.me/yourname",        // ← Replace with your PayPal.me link
      note: "Contribute to our honeymoon fund or wherever life takes us next!"
    },

    venmo: {
      label: "Venmo",
      url: "https://venmo.com/yourname",        // ← Replace with your Venmo handle
      note: "@YourVenmoHandle"
    },

    cashNote: "Prefer to give cash or a check? Please reach out to us directly — we would love to hear from you.",

    thankyou: {
      title: "Thank You",
      text: "From the bottom of our hearts, thank you for being part of our story. Whether you traveled across the country or just across town, the fact that you're here — or thinking of us — means everything. We can't wait to celebrate with you and create memories that will last a lifetime. With so much love, Eric & Maria"
    }
  },

  // ── PAGE 5: WE ARE MARRIED ──────────────────────────────
  married: {
    heroCaption: "We Did It!",
    heroSubtitle: "September 25, 2027",
    intro: "We're married! This page will be updated with photos, highlights, and memories from our wedding day. Check back soon — we can't wait to share every magical moment with you.",
    galleryCaption: "Photos coming soon — check back after the wedding!",
    // Personal message to update after the wedding:
    message: "Thank you for celebrating with us. We are overwhelmed with gratitude and joy. Every laugh, every dance, every toast made our day unforgettable. Here's to forever! — Eric & Maria"
  },

  // ── PAGE 6: MESSAGES ────────────────────────────────────
  messages: {
    heroCaption: "Leave Us a Message",
    heroSubtitle: "We'd love to hear from you",
    intro: "Share a note, a wish, a memory, or just say hello! We read every message and treasure each one.",

    // ── FORMSPREE SETUP ────────────────────────────────
    // 1. Go to https://formspree.io and create a free account
    // 2. Click "New Form" — give it a name like "Wedding Messages"
    // 3. Copy your form endpoint (looks like: https://formspree.io/f/xyzabcde)
    // 4. Paste it below replacing the placeholder URL:
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",  // ← REPLACE with your Formspree endpoint

    successMessage: "Thank you for your message! We'll treasure it always. 💜",
    fields: {
      name:    "Your Name",
      email:   "Your Email",
      message: "Your Message"
    }
  },

  // ── PAGE 7: RSVP ────────────────────────────────────────
  rsvp: {
    heroCaption: "RSVP",
    heroSubtitle: "Kindly reply by August 1, 2027",   // ← Change deadline as needed

    intro: "We can't wait to celebrate with you! Please let us know if you'll be joining us by August 1, 2027. Your response helps us ensure every detail is perfect for our big day.",

    // Deadline shown on the page
    deadline: "August 1, 2027",                        // ← Change as needed

    // Meal options — add, remove, or rename as needed
    mealOptions: [
      "Chicken — Herb Roasted Chicken Breast",
      "Beef — Prime Rib with Au Jus",
      "Vegetarian — Wild Mushroom Risotto",
      "Vegan — Roasted Vegetable Tart",
      "Child's Plate"
    ],

    // ── FORMSPREE SETUP FOR RSVP ───────────────────────
    // You can use a SEPARATE Formspree form for RSVPs so responses
    // come in cleanly as their own set of emails / spreadsheet.
    // 1. Create a second form at https://formspree.io
    // 2. Name it "Wedding RSVP"
    // 3. Paste your new endpoint below:
    formspreeEndpoint: "https://formspree.io/f/YOUR_RSVP_FORM_ID",  // ← REPLACE

    successMessage: "You're all set! We're so excited to celebrate with you. 🥂",
    declineMessage: "We're so sorry you can't make it, but we appreciate you letting us know. You'll be in our hearts on our big day. 💜",

    // Note shown below the form
    note: "Having trouble with the form? Email us directly at your@email.com",  // ← Update email
  },

  // ── NAVIGATION ──────────────────────────────────────────
  nav: [
    { label: "Our Story",     href: "index.html" },
    { label: "Wedding Party", href: "party.html" },
    { label: "The Weekend",   href: "weekend.html" },
    { label: "RSVP",          href: "rsvp.html" },
    { label: "Registry",      href: "registry.html" },
    { label: "We Are Married",href: "married.html" },
    { label: "Messages",      href: "messages.html" }
  ],

  // ── FOOTER ──────────────────────────────────────────────
  footer: {
    message: "Made with love for Eric & Maria · September 25, 2027",
    hashtag: "#EricAndMaria2027"
  }

};

// Make config globally available
window.WEDDING = WEDDING;
