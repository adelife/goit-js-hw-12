import{S as $,i as d,a as M}from"./assets/vendor-eeed083b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const k="https://pixabay.com/api/",m="41911500-2109ce3c8bb16633259977e96",u=document.querySelector(".gallery"),p=document.querySelector(".search-form");document.querySelector(".search-input");document.querySelector(".start-btn");const y=document.querySelector(".loader"),s=document.querySelector(".load-btn");document.querySelector("loader-load");const c="is-hidden";let f="",l=1,h=0;const g=new $(".gallery a",{captionsData:"alt",captionDelay:250});y.style.display="none";p.addEventListener("submit",w);function w(o){o.preventDefault(),y.style.display="block",f=o.target.elements.query.value,L(f).then(r=>{y.style.display="none",r.hits.length||d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),u.innerHTML="",l=1;try{u.innerHTML=b(r.hits),g.refresh(),v(),r.totalHits>0?(s.classList.remove(c),s.addEventListener("click",S)):s.classList.add(c)}catch{q()}finally{p.reset(),l===h&&(s.classList.add(c),d.error({title:"Error",message:"We're sorry, but you've reached the end of search results."}))}})}function L(o,r=1){return M.get(`${k}?key=${m}&q=${o}`,{params:{apiKey:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r}}).then(({data:a})=>a)}function b(o){return o.map(({webformatURL:r,largeImageURL:a,tags:i,likes:e,views:t,comments:n,downloads:E})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${i}"
    />
    <p class= "gallery-descr">• Likes: ${e} • Views: ${t} • Comments: ${n} •</span> Downloads:${E}</p>
  </a>
</li>
  `).join("")}async function S(){l+=1,s.disabled=!0;try{const{hits:o,total:r}=await L(f,l);h=Math.ceil(r/40),u.insertAdjacentHTML("beforeend",b(o)),g.refresh(),v()}catch{q()}finally{s.disabled=!1,l===h&&(s.classList.add(c),s.removeEventListener("click",S),d.error({title:"Error",message:"We're sorry, but you've reached the end of search results."}))}}function q(o){d.error({title:"Error",message:"OOps... Plese try again"})}function v(){window.scrollBy({top:700,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
