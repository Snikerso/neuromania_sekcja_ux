const locationFile = document.location.hash.substring(1) // pytanie o substring

window.onload = function() { 
    myFunction(locationFile)
  };


const main = document.querySelector('#main') 
const ahrefs = document.querySelectorAll('a') // Zadanie: pobrać wszystkie elementy a ze strony

ahrefs[0].addEventListener("click",()=>myFunction('aboutus'));
ahrefs[1].addEventListener("click",()=>myFunction('shedule'));
ahrefs[2].addEventListener("click",()=>myFunction('news'));
ahrefs[3].addEventListener("click",()=>myFunction('venue'));
ahrefs[4].addEventListener("click",()=>myFunction('contact'));
ahrefs[5].addEventListener("click",()=>myFunction('guests'));
ahrefs[6].addEventListener("click",()=>myFunction('sponsors'));
ahrefs[7].addEventListener("click",()=>myFunction('editions'));


function myFunction(string) {
    
    const activeLink = document.querySelector(`.${string}`) 
    const activeAllLink= document.querySelector(`.active`)



    if(activeAllLink){ 
        activeAllLink.classList.remove("active");
    }
    activeLink.className = `${string} active`


    fetch(`${string}.html`)
    .then(res=>{return res.text()})

    .then( html=>{ 
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var body = doc.body.children.item(0)

        if (main.hasChildNodes()) {
            main.removeChild(main.childNodes[0]); 
          }
        main.appendChild(body)
    })
    
}

