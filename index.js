import{a as d,S as u,i as a}from"./assets/vendor-1AYLTIiv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="50517906-38b2af55f551ffd9965b635dd",f="https://pixabay.com/api/";function m(n){const o={key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(f,{params:o}).then(e=>e.data).catch(e=>{throw console.error("Error fetching images:",e),e})}const c=document.querySelector(".gallery");document.querySelector(".loader");const h=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const o=n.map(e=>`
        <a class="gallery__item" href="${e.largeImageURL}">
          <div class="photo-card">
            <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
            <div class="info">
              
  <div class="info-labels">
    <p><b>Comments</b></p>
    <p><b>Likes</b></p>
    <p><b>Views</b></p>
    <p><b>Downloads</b></p>
  </div>
  <div class="info-values">
    <p>${e.comments}</p>
    <p>${e.likes}</p>
    <p>${e.views}</p>
    <p>${e.downloads}</p>
  </div>
</div>
            </div>
          
        </a>
      `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function g(){c.innerHTML=""}function b(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const l=document.querySelector(".form"),v=l.elements["search-text"];l.addEventListener("submit",n=>{n.preventDefault();const o=v.value.trim();if(!o){a.warning({message:"Please enter a search term!",position:"topRight"});return}g(),b(),m(o).then(e=>{const s=e.hits;if(s.length===0){a.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(s)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
