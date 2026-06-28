# Luminous Hotel - Luxury Hotel Website
**Luminous 2026 Summer School - Assignment 1**

## Project Overview
This project is a fully responsive, premium front-end static website built for **Luminous Hotel**, a high-end luxury hotel brand. Adopting the tagline: **"Experience the light within"**, the site showcases a sophisticated gold-and-dark aesthetic, modern layouts, and intuitive interactive features.

## Implemented Pages
1. **Home (`index.html`):** Features the brand identity, premium sticky header navigation with dropdowns, latest suites/offers highlights, a full-width **Brand Achievements Banner** (heritage stats counter), dining showcases, a client **Testimonials Carousel**, and travel stories.
2. **About Us (`about.html`):** Shares the legacy and values of Luminous, featuring a visual **"A Century of Milestones"** legacy timeline (6 historical nodes from 1912 - 2026) and an expanded **6-card Philosophy Grid** covering our core brand values.
3. **Destinations (`destinations.html`):** An interactive portal showcasing 8 resort locations (India, Maldives, Bhutan, Sri Lanka). Features real-time tab country filters, a featured city node slider, and live search options (Theme, City, and text queries).
4. **Hotels & Suites (`rooms.html`):** Showcases 8 luxury rooms, ocean views, royal suites, and private villas (featuring the *Golden Emperor Suite* and *Clifftop Sanctuary Villa*) alongside the "Luminous Inner Circle" membership benefits.
5. **Experiences (`experiences.html`):** Offers 6 high-end curated guest activities such as Legendary Dining, the J Wellness Circle, Heritage Walks, Royal Afternoon Tea, the Wine Cellar, and **Private Yacht Charters**.
6. **Gallery (`gallery.html`):** A visual collection of the hotel's spaces, pools, dining, and venue experiences across 8 category cards.
7. **Book A Stay (`booking.html`):** Interactive booking request and concierge contact form, including custom **Concierge Checkbox Add-ons**.

## Key Features & Assets
* **Custom SVG Logo (`images/logo.svg`):** A custom-designed, responsive, vector-based golden sunburst featuring the monogram **L** at the center. It scales perfectly on any screen resolution without quality loss.
* **Responsive Navigation Menu:** Optimized for desktop and mobile screen widths with sliding transitions and interactive multi-column submenus.
* **Interactive Testimonials Carousel:** A JavaScript-driven, automatically rotating client review slider displaying luxury hotel reviews with manual dot indicators.
* **Real-time Destinations Search & Filter System:** Client-side JavaScript filtering engine that allows users to instantly search hotels by text query, select countries via active tabs, or filter by City and Theme dropdowns.
* **Horizontal Featured Carousel Slider:** A custom scroll-slider for exploring featured cities on the Destinations page, navigated via smooth-scroll arrow buttons.
* **Bespoke Input Constraints & Validation:** Automatic real-time sanitation of inputs, such as strictly limiting the contact phone number field to a 10-digit format, and checking booking fields before showing success alerts.
* **Concierge Custom Add-ons Selection:** Allows booking customization directly from the reserve stay form with dedicated checklist items.
* **Newsletter Subscription Handler:** Interactive submission confirmation with localized alert messages.

## Technology Stack
- **Core:** HTML5, Semantic Markup
- **Styling:** Custom CSS3 (with CSS Variables for colors and theme harmony)
- **Logic:** Vanilla ES6 JavaScript (zero external dependencies)
- **Assets:** Custom SVGs, high-resolution photography via Unsplash