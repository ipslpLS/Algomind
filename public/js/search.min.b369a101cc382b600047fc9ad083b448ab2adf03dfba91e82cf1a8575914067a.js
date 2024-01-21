document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("search-input"),t=document.getElementById("search-results"),n="/Algomind/search-name.json";fetch(n).then(e=>{if(!e.ok)throw new Error(`Network response was not ok: ${e.status}`);return e.json()}).then(e=>{console.log("Data Loaded:",e),s(e.posts)}).catch(e=>console.error("Fetch error:",e));function s(n){const s={keys:["title","tags"]},o=new Fuse(n,s);e.addEventListener("input",function(){const t=e.value.trim().toLowerCase();console.log("Search Term:",t);const n=o.search(t);console.log("Search Results:",n),i(n)});function i(s){const o=e.value.trim().toLowerCase(),i=s.filter(e=>e.item.title.toLowerCase().includes(o)),a=o.startsWith("#");t.innerHTML=i.length>0?i.map(e=>`
                  <div class="SearchResultElement">
                    <h2><a href="${e.item.url}">${e.item.title}</a></h2>
                    <p>Tags: ${e.item.tags.map(e=>`<a href="/tags/${e}/">#${e}</a>`).join(", ")}</p>
                  </div>
                `).join(""):a?n.filter(e=>e.tags.includes(o.slice(1))).map(e=>`
                    <div class="SearchResultElement">
                      <h3><a href="${e.url}">${e.title}</a></h3>
                      <p>Tags: ${e.tags.map(e=>`<a href="/tags/${e}/">#${e}</a>`).join(", ")}</p>
                    </div>
                  `).join(""):""}}})