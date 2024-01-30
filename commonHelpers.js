import{i as m,S,a as q}from"./assets/vendor-eeed083b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const $="https://pixabay.com/api/",y="41911500-2109ce3c8bb16633259977e96",c=document.querySelector(".gallery"),p=document.querySelector(".search-form");document.querySelector(".search-input");document.querySelector(".start-btn");const d=document.querySelector(".loader"),s=document.querySelector(".load-btn");document.querySelector("loader-load");const u="is-hidden";let f="",i=1;d.style.display="none";p.addEventListener("submit",P);function P(o){o.preventDefault(),d.style.display="block",f=o.target.elements.query.value,h(f).then(t=>{d.style.display="none",t.hits.length||m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",i=1;try{c.innerHTML=g(t.hits),new S(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),t.totalHits>0?(s.classList.remove(u),s.addEventListener("click",E)):s.classList.add(u)}catch{L()}finally{p.reset()}})}function h(o,t=1){return q.get(`${$}?key=${y}&q=${o}`,{params:{apiKey:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:5,page:t}}).then(({data:a})=>a)}function g(o){return o.map(({webformatURL:t,largeImageURL:a,tags:l,likes:e,views:r,comments:n,downloads:b})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${l}"
    />
    <p class= "gallery-descr">• Likes: ${e} • Views: ${r} • Comments: ${n} •</span> Downloads:${b}</p>
  </a>
</li>
  `).join("")}async function E(){i+=1,s.disabled=!0;try{const{hits:o,total:t}=await h(f,i);let a=Math.ceil(t/per_page);c.insertAdjacentHTML("beforeend",g(o))}catch{L()}finally{s.disabled=!1,i===maxPage&&s.classList.add(u)}}function L(o){m.error({title:"Error",message:"OOps... Plese try again"})}
//# sourceMappingURL=commonHelpers.js.map
