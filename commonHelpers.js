import{i as y,S as p,a as P}from"./assets/vendor-eeed083b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const $="https://pixabay.com/api/",h="41911500-2109ce3c8bb16633259977e96",c=document.querySelector(".gallery"),g=document.querySelector(".search-form");document.querySelector(".search-input");document.querySelector(".start-btn");const u=document.querySelector(".loader"),a=document.querySelector(".load-btn");document.querySelector("loader-load");const d="is-hidden";let f="",i=1,m=0;u.style.display="none";g.addEventListener("submit",w);function w(o){o.preventDefault(),u.style.display="block",f=o.target.elements.query.value,L(f).then(r=>{u.style.display="none",r.hits.length||y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",i=1;try{c.innerHTML=b(r.hits),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),v(),r.totalHits>0?(a.classList.remove(d),a.addEventListener("click",S)):a.classList.add(d)}catch{q()}finally{g.reset()}})}function L(o,r=1){return P.get(`${$}?key=${h}&q=${o}`,{params:{apiKey:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:r}}).then(({data:s})=>s)}function b(o){return o.map(({webformatURL:r,largeImageURL:s,tags:l,likes:e,views:t,comments:n,downloads:E})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${l}"
    />
    <p class= "gallery-descr">• Likes: ${e} • Views: ${t} • Comments: ${n} •</span> Downloads:${E}</p>
  </a>
</li>
  `).join("")}async function S(){i+=1,a.disabled=!0;try{const{hits:o,total:r}=await L(f,i);m=Math.ceil(r/40),c.insertAdjacentHTML("beforeend",b(o)),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),v()}catch{q()}finally{a.disabled=!1,i===m&&(a.classList.add(d),a.removeEventListener("click",S),y.error({title:"Error",message:"We're sorry, but you've reached the end of search results."}))}}function q(o){y.error({title:"Error",message:"OOps... Plese try again"})}function v(){window.scrollBy({top:700,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
