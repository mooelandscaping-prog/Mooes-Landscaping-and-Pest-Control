"use client";
import { useEffect, useRef } from "react";
const formId = "7f313c40-2eea-42c0-b298-e6b832960cc8-5330738";
const formUrl = "https://clienthub.getjobber.com/client_hubs/7f313c40-2eea-42c0-b298-e6b832960cc8/public/work_request/embedded_work_request_form?form_id=5330738";
export default function JobberRequestForm() {
 const host = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const container = host.current;
  if (!container) return;
  const observer = new MutationObserver(() => {
   const frame = container.querySelector("iframe");
   if (frame) frame.title = "Request a quote from Mooe’s Landscaping & Pest Control";
  });
  observer.observe(container, {childList:true,subtree:true});
  const script = document.createElement("script");
  script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
  script.async = true;
  script.setAttribute("clienthub_id", formId);
  script.setAttribute("form_url", formUrl);
  container.appendChild(script);
  return () => {observer.disconnect(); container.replaceChildren();};
 }, []);
 return <>
  <link rel="stylesheet" href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" media="screen" />
  <div id={formId} ref={host} style={{minHeight:480,width:"100%"}} />
  <p style={{fontSize:"0.95rem",lineHeight:1.6}}>Having trouble with the form? <a href={formUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration:"underline"}}>Open the request form in a new tab</a> or call <a href="tel:17045006475" style={{textDecoration:"underline"}}>704-500-6475</a>.</p>
 </>;
}
