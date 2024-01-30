import{i as m,S,a as q}from"./assets/vendor-eeed083b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const $="https://pixabay.com/api/",f="41911500-2109ce3c8bb16633259977e96",l=document.querySelector(".gallery"),p=document.querySelector(".search-form");document.querySelector(".search-input");document.querySelector(".start-btn");const c=document.querySelector(".loader"),a=document.querySelector(".load-btn");document.querySelector("loader-load");const y="is-hidden";let u="",d=1;c.style.display="none";p.addEventListener("submit",E);function E(t){t.preventDefault(),c.style.display="block",u=t.target.elements.query.value,h(u).then(o=>{c.style.display="none",o.hits.length||m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="",d=1;try{l.innerHTML=g(o.hits),new S(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),o.totalHits>0?(a.classList.remove(y),a.addEventListener("click",M)):a.classList.add(y)}catch{L()}finally{p.reset()}})}function h(t,o=1){return q.get(`${$}?key=${f}&q=${t}`,{params:{apiKey:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:5,page:o}}).then(({data:n})=>n)}function g(t){return t.map(({webformatURL:o,largeImageURL:n,tags:i,likes:e,views:r,comments:s,downloads:b})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${i}"
    />
    <p class= "gallery-descr">• Likes: ${e} • Views: ${r} • Comments: ${s} •</span> Downloads:${b}</p>
  </a>
</li>
  `).join("")}async function M(){d+=1,a.disabled=!0;try{const{hits:t}=await h(u,d);l.insertAdjacentHTML("beforeend",g(t))}catch{L()}finally{a.disabled=!1}}function L(t){m.error({title:"Error",message:"OOps... Plese try again"})}
//# sourceMappingURL=commonHelpers.js.map
