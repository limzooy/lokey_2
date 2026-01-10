
# Blueprint: LoKey - AdSense Optimization

## 1. Project Overview

**"LoKey"** is a media platform dedicated to curating and analyzing lifestyle trends for individuals in their 20s and 30s, with a focus on "Quiet Luxury" and "Low-key Taste." The primary revenue model is centered around Google AdSense, supplemented by affiliate links and brand collaborations.

To achieve successful AdSense approval and build a high-quality site, this blueprint outlines a comprehensive plan focusing on trustworthiness, content quality, and user experience.

---

## 2. Implemented Features (as of Initial Setup)

*   **Framework:** Next.js (App Router) with TypeScript.
*   **Styling:** Tailwind CSS.
*   **Core Pages:** Homepage, About, Contact, Privacy, Terms.
*   **Content Structure:**
    *   Category pages: `/category/[slug]`
    *   Post pages: `/post/[slug]`
*   **Initial Content:** Placeholder articles for Fashion, Vintage, and Low-Alcohol topics.

---

## 3. Current Plan: AdSense Approval Optimization

This phase focuses on meeting and exceeding the requirements for Google AdSense approval.

### Step 1: Enhance Essential Pages for Trustworthiness

*   **`app/terms/page.tsx` (Terms of Service):**
    *   **Action:** Replace placeholder text with comprehensive legal notices.
    *   **Details:** Clearly define the service, user rights and obligations, copyright and content ownership, and limitations of liability. Include policies regarding the unauthorized use of site content.
*   **`app/privacy/page.tsx` (Privacy Policy):**
    *   **Action:** Add specific details about data handling and advertising.
    *   **Details:** Explicitly state the use of cookies, data sharing with advertising partners like Google AdSense, and the purposes for collecting user data. Add information on user rights and the data protection officer.
*   **`app/contact/page.tsx` (Contact):**
    *   **Action:** Upgrade from a simple email link to an interactive **Contact Form**.
    *   **Details:** Implement a form that allows users to send messages directly. This will be handled securely and efficiently using a Next.js Server Action, enhancing interactivity and professionalism.
*   **`app/about/page.tsx` (About):**
    *   **Action:** Elaborate on the site's identity and mission.
    *   **Details:** Add content about LoKey's vision, content philosophy, and a brief introduction to the team or editors to build credibility and trust.

### Step 2: Implement Technical SEO & Verification

*   **`public/robots.txt`:**
    *   **Action:** Create the file to guide search engine crawlers.
    *   **Details:** Specify the sitemap location and disallow crawling of non-essential paths to improve SEO efficiency.
*   **`public/ads.txt`:**
    *   **Action:** Create a placeholder file.
    *   **Details:** Prepare the file to declare authorized ad sellers, ensuring transparency for future advertising revenue. It will be populated after AdSense approval.

### Step 3: Improve User Experience (UX) and Content Quality

*   **Navigation:**
    *   **Action:** Implement a global navigation bar.
    *   **Details:** Add a header to `app/layout.tsx` that provides clear links to Home, About, Contact, and main categories, ensuring easy access for users and crawlers.
*   **Content Enrichment:**
    *   **Action:** Expand and refine existing articles.
    *   **Details:** Transform placeholder posts into in-depth, high-quality articles that provide real value to the reader.
*   **Homepage Redesign:**
    *   **Action:** Enhance the visual layout and user flow of the homepage.
    *   **Details:** Improve the design to better reflect the "Quiet Luxury" concept, featuring content more effectively and creating a stronger first impression.
