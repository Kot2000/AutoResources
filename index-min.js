class StaticResource extends HTMLElement{constructor(){super()}connectedCallback(){fetch(this.getAttribute("href")||this.getAttribute("src")||undefined).then((res)=>res.text()).then((text)=>{const htmlresorce = new DOMParser().parseFromString(text,'text/html').body;htmlresorce.querySelectorAll('script').forEach(scriptelement=>{scriptelement.remove();});this.attachShadow({mode:"open"}).append(htmlresorce);}).catch((e)=>console.error(e))}}class ManipulativeResource extends HTMLElement{constructor(){super()}connectedCallback(){fetch(this.getAttribute("href")||this.getAttribute("src")||undefined).then((res)=>res.text()).then((text)=>{const htmlresorce = new DOMParser().parseFromString(text,'text/html').body;this.attachShadow({mode:"open"}).append(htmlresorce);}).catch((e)=>console.error(e))}}customElements.define("static-resource", StaticResource);customElements.define("manipulative-resource", ManipulativeResource);
