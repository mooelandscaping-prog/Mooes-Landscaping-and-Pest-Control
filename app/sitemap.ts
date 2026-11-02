import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["/","/landscaping-lawn-care","/pest-control","/wildlife-removal","/service-area","/contact","/privacy-policy","/terms-of-service"].map(path=>({url:"https://www.mooeslandscapingandpest.com"+path})); }
