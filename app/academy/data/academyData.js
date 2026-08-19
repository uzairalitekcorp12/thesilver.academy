/*
 * =================================================================
 * SILVER ACADEMY
 * CONTENT & ASSET CONTROL FILE
 * =================================================================
 *
 * This is the central content configuration for the website.
 *
 * Update things here instead of searching through components.
 *
 * Controls:
 *
 * - Website routes
 * - Academy logo
 * - Hero photos
 * - Why Choose Us image
 * - Cambridge badge
 * - Skill logos
 * - Social logos
 * - Navigation
 * - Programs
 * - Subjects
 * - Admission process
 * - Statistics
 * - Footer content
 *
 * IMPORTANT:
 *
 * This project currently uses JavaScript (.js), NOT TypeScript.
 *
 * Therefore TypeScript syntax such as:
 *
 *     as const
 *
 * must NOT be used in this file.
 *
 * =================================================================
 */


/* =================================================================
   WEBSITE ROUTES
   =================================================================
 *
 * IMPORTANT:
 *
 * "/" = Silver Academy homepage
 *
 * "/registration" = Registration Form page
 *
 * Homepage sections use:
 *
 * "/#programs"
 * "/#faculty"
 * etc.
 *
 * This is important because these links must also work when the
 * visitor is currently on /registration.
 *
 * ================================================================= */

export const academyRoutes = {

  home:
    "/",


  homeSection:
    "/#home",


  about:
    "/#about",


  programs:
    "/#programs",


  academics:
    "/#academics",


  skills:
    "/#skills",


  faculty:
    "/faculty",


  admission:
    "/#admission",


  contact:
    "/contact",


  registration:
    "/registration",

};


/* =================================================================
   WEBSITE ASSETS
   ================================================================= */

export const academyAssets = {

  /* ---------------------------------------------------------------
     MAIN ACADEMY LOGO
     --------------------------------------------------------------- */

  logo:
    "/assets/academy/shared/logo.png",


  /* ---------------------------------------------------------------
     WEBSITE TAB / FAVICON
     --------------------------------------------------------------- */

  webLogo:
    "/assets/academy/shared/web-logo.png",


  /* ---------------------------------------------------------------
     HERO FACULTY IMAGES

     Replace later with final transparent faculty PNG/WebP files.
     --------------------------------------------------------------- */

  heroTeachers: {

    xahid:
      "/assets/academy/hero/moosa-khan-img.png",


    sara:
      "/assets/academy/hero/zahid-anwar-img.png",


    hamza:
      "/assets/academy/hero/kashan-rashid-img.png",

  },


  /* ---------------------------------------------------------------
     WHY CHOOSE US - STATIC CLASSROOM IMAGE
     --------------------------------------------------------------- */

  classroom:
    "/assets/academy/whychooseus/classroom.png",


  /* ---------------------------------------------------------------
     CLASSROOM IMAGE POSITION
     --------------------------------------------------------------- */

  classroomPosition:
    "75% 90%",


  /* ---------------------------------------------------------------
     CAMBRIDGE BADGE
     --------------------------------------------------------------- */

  cambridge:
    "/assets/academy/hero/cambridge-dummy.svg",


  /* ---------------------------------------------------------------
     SKILL PLATFORM LOGOS
     --------------------------------------------------------------- */

  skillLogos: {

    amazon:
      "/assets/academy/skillsicon/amazon.svg",


    ebay:
      "/assets/academy/skillsicon/ebay.svg",


    shopify:
      "/assets/academy/skillsicon/shopify.svg",


    wordpress:
      "/assets/academy/skillsicon/wordpress.svg",


    googleAds:
      "/assets/academy/skillsicon/googleads.svg",


    etsy:
      "/assets/academy/skillsicon/etsy.svg",

  },


  /* ---------------------------------------------------------------
     SOCIAL MEDIA LOGOS
     --------------------------------------------------------------- */

  socialLogos: {

    facebook:
      "https://cdn.simpleicons.org/facebook/ffffff",


    instagram:
      "https://cdn.simpleicons.org/instagram/ffffff",


    youtube:
      "https://cdn.simpleicons.org/youtube/ffffff",


    whatsapp:
      "https://cdn.simpleicons.org/whatsapp/ffffff",

  },

};


/* =================================================================
   HERO SLIDES
   ================================================================= */

export const heroSlides = [

  {
    id:
      "xahid-anwar",

    image:
      academyAssets.heroTeachers.xahid,

    imagePosition:
      "50% 27%",

    alt:
      "Silver Academy Chemistry faculty member Sir Moosa Khan",

    badgeImage:
      academyAssets.cambridge,

    badgeEyebrow:
      "Cambridge Assessment",

    program:
      "O-LEVEL / IGCSE",

    subject:
      "CHEMISTRY",

    teacher:
      "MOOSA KHAN",

    ribbon:
      "ONLINE REVISION",

    session:
      "SESSION",
  },


  {
    id:
      "sara-khan",

    image:
      academyAssets.heroTeachers.sara,

    imagePosition:
      "50% 25%",

    alt:
      "Silver Academy English faculty member Sir Xahid Anwer",

    badgeImage:
      academyAssets.cambridge,

    badgeEyebrow:
      "Cambridge Curriculum",

    program:
      "A-LEVEL SCIENCES",

    subject:
      "ENGLISH",

    teacher:
      "XAHID ANWER",

    ribbon:
      "ONLINE POWERPACK",

    session:
      "SESSION",
  },


  {
    id:
      "hamza-ali",

    image:
      academyAssets.heroTeachers.hamza,

    imagePosition:
      "50% 24%",

    alt:
      "Silver Academy Physics faculty member Sir Kashan Rashid",

    badgeImage:
      academyAssets.cambridge,

    badgeEyebrow:
      "Cambridge Curriculum",

    program:
      "A-LEVEL SCIENCES",

    subject:
      "PHYSICS",

    teacher:
      "KASHAN RASHID",

    ribbon:
      "PAST PAPER REVISION",

    session:
      "SESSION",
  },

];


/* =================================================================
   HERO FEATURES
   ================================================================= */

export const heroFeatures = [

  {
    key:
      "hybrid",

    label:
      "Hybrid Learning Model",
  },


  {
    key:
      "batch",

    label:
      "Small Batch Size",
  },


  {
    key:
      "faculty",

    label:
      "Top Notch Faculty",
  },

];


/* =================================================================
   MAIN NAVIGATION
   =================================================================
 *
 * IMPORTANT:
 *
 * Homepage section routes use academyRoutes so they continue
 * working even when the user is currently on /registration.
 *
 * Registration Form opens the separate /registration page.
 *
 * ================================================================= */

export const navLinks = [

  {
    label:
      "Home",

    href:
      academyRoutes.homeSection,
  },


  {
    label:
      "About",

    href:
      academyRoutes.about,
  },


  {
    label:
      "Programs",

    href:
      academyRoutes.programs,

    hasDropdown:
      true,
  },


  {
    label:
      "Faculty",

    href:
      academyRoutes.faculty,
  },


  {
    label:
      "Contact",

    href:
      academyRoutes.contact,
  },


  {
    label:
      "Registration Form",

    href:
      academyRoutes.registration,
  },

];


/* =================================================================
   PROGRAM DROPDOWN
   ================================================================= */

export const programDropdown = [

  {
    label:
      "Academics",

    href:
      academyRoutes.academics,
  },


  {
    label:
      "Skill Development",

    href:
      academyRoutes.skills,
  },


  {
    label:
      "Business Development",

    href:
      academyRoutes.programs,
  },

];


/* =================================================================
   MAIN PROGRAMS
   ================================================================= */

export const programs = [

  {
    key:
      "academics",

    title:
      "Academics",

    description:
      "O/A Level preparation, SAT and Aptitude Test prep with a strong foundation for academic excellence.",
  },


  {
    key:
      "skills",

    title:
      "Skill Development",

    description:
      "In-demand digital skills like Web Development, Digital Marketing and more to future-proof your career.",
  },


  {
    key:
      "business",

    title:
      "Business Development",

    description:
      "Practical business and e-commerce training to help you launch, grow and lead in the digital economy.",
  },

];


/* =================================================================
   ACADEMIC SUBJECTS
   ================================================================= */

export const subjects = [

  {
    key:
      "math",

    label:
      "Mathematics",
  },


  {
    key:
      "computer",

    label:
      "Computer Science",
  },


  {
    key:
      "physics",

    label:
      "Physics",
  },


  {
    key:
      "chemistry",

    label:
      "Chemistry",
  },


  {
    key:
      "biology",

    label:
      "Biology",
  },


  {
    key:
      "economics",

    label:
      "Economics",
  },


  {
    key:
      "business",

    label:
      "Business Studies",
  },


  {
    key:
      "accounting",

    label:
      "Accounting",
  },


  {
    key:
      "english",

    label:
      "English Language",
  },

];


/* =================================================================
   SKILL DEVELOPMENT COURSES
   ================================================================= */

export const skillCourses = [

  {
    key:
      "amazon",

    label:
      "Amazon",
  },


  {
    key:
      "ebay",

    label:
      "eBay",
  },


  {
    key:
      "shopify",

    label:
      "Shopify",
  },


  {
    key:
      "wordpress",

    label:
      "WordPress Development",
  },


  {
    key:
      "googleAds",

    label:
      "Google Ads",
  },


  {
    key:
      "etsy",

    label:
      "Etsy",
  },

];


/* =================================================================
   WHY SILVER ACADEMY
   ================================================================= */

export const whyPoints = [

  "Experienced & Qualified Faculty",

  "Personalized Attention in Small Batches",

  "Hybrid Learning for Maximum Flexibility",

  "Practical Approach to Real-World Success",

];


/* =================================================================
   STATISTICS / KPI DATA
   =================================================================
 *
 * value  = final number reached by animation
 * suffix = text displayed after number
 *
 * ================================================================= */

export const stats = [

  {
    value:
      800,

    suffix:
      "+",

    label:
      "Students Empowered",

    key:
      "students",
  },


  {
    value:
      11,

    suffix:
      "",

    label:
      "Expert Faculty",

    key:
      "faculty",
  },


  {
    value:
      20,

    suffix:
      "+",

    label:
      "Courses & Programs",

    key:
      "courses",
  },


  {
    value:
      89,

    suffix:
      "%",

    label:
      "Success Rate",

    key:
      "success",
  },

];


/* =================================================================
   ADMISSION PROCESS
   ================================================================= */

export const admissionSteps = [

  {
    key:
      "form",

    label:
      "Fill out the registration form",
  },


  {
    key:
      "call",

    label:
      "Our Representative will contact you",
  },


  {
    key:
      "visit",

    label:
      "Visit our Campus to meet our faculty",
  },


  {
    key:
      "demo",

    label:
      "Attend a Demo Class for your satisfaction",
  },


  {
    key:
      "enroll",

    label:
      "Pay the Fee and you are enrolled!",
  },

];


/* =================================================================
   FOOTER PROGRAMS
   ================================================================= */

export const footerPrograms = [

  "Academics",

  "Skill Development",

  "Business Development",

  "SAT Preparation",

  "Aptitude Test Prep",

];