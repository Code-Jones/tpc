// An array of links for navigation bar
const navBarLinks = [
  { name: "Services", url: "/services" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Blog", url: "/blog" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "The Value of Experience", url: "/about" },
      { name: "Completed Work", url: "/portfolio" },
      { name: "Our Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "/about" },
      { name: "Blog", url: "/blog" },
      { name: "FAQ", url: "/faq" },
      { name: "Customers", url: "/portfolio" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  google: "https://www.google.com/",
  email: "mailto:terracePointConsultingGroup@gmail.com", //todo update this
  linkedin: "https://www.linkedin.com/in/j-edward-young-747205133/?originalSubdomain=ca",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};