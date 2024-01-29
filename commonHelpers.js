import{i as m,S as b,a as q}from"./assets/vendor-eeed083b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const $="https://pixabay.com/api/",u="41911500-2109ce3c8bb16633259977e96",l=document.querySelector(".gallery"),p=document.querySelector(".search-form");document.querySelector(".search-input");document.querySelector(".start-btn");const c=document.querySelector(".loader"),i=document.querySelector(".load-btn"),d="is-hidden";let y="",f=1;c.style.display="none";p.addEventListener("submit",E);function E(r){r.preventDefault(),c.style.display="block",y=r.target.elements.query.value,h(y).then(o=>{c.style.display="none",o.hits.length||m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="";try{l.innerHTML=g(o.hits),new b(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),o.totalHits>0?(i.classList.remove(d),i.addEventListener("click",P)):i.classList.add(d)}catch{L()}finally{p.reset()}})}function h(r,o=1){return q.get(`${$}?key=${u}&q=${r}`,{params:{apiKey:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:5}}).then(({data:n})=>n)}function g(r){return r.map(({webformatURL:o,largeImageURL:n,tags:a,likes:e,views:t,comments:s,downloads:S})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${a}"
    />
    <p class= "gallery-descr">• Likes: ${e} • Views: ${t} • Comments: ${s} •</span> Downloads:${S}</p>
  </a>
</li>
  `).join("")}async function P(){f+=1;try{const{hits:r}=await h(name,f);g(data.hits,l)}catch{L()}}function L(r){m.error({title:"Error",message:"OOps... Plese try again"})}
//# sourceMappingURL=commonHelpers.js.map
