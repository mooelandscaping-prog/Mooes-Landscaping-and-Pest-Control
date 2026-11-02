import type { Metadata } from "next";
export const siteUrl = "https://www.mooeslandscapingandpest.com";
export const siteName = "Mooe's Landscaping & Pest Control";
export function pageMetadata(title: string, description: string, path: string): Metadata {
 return {title,description,alternates:{canonical:siteUrl+path},
 openGraph:{type:"website",locale:"en_US",siteName,title,description,url:siteUrl+path,images:[{url:siteUrl+"/company-logo.png",width:1024,height:1024,alt:siteName}]},
 twitter:{card:"summary",title,description,images:[siteUrl+"/company-logo.png"]}};
}
