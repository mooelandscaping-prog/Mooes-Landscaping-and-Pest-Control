export function ServiceSchema({name,path}:{name:string;path:string}) {
 const site = "https://www.mooeslandscapingandpest.com";
 const data = {"@context":"https://schema.org","@graph":[{"@type":"Service",name,url:site+path,provider:{"@id":site+"/#local-business"},areaServed:{"@type":"AdministrativeArea",name:"Iredell County, North Carolina"}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:site+"/"},{"@type":"ListItem",position:2,name,item:site+path}]}]};
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\\u003c")}}/>;
}
