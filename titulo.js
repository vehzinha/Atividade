let tam = 2

function createbts() {
    const btaumenta = document.createElement(null) 
    btaumenta.innerHTML = `<button id="btaumenta">+</button>` 
   
    const btdiminui = document.createElement(null) 
    btdiminui.innerHTML = `<button id="btdiminui">-</button>`
    
    const br = document.createElement('br') 

    titulo.parentNode.insertBefore(br, titulo.nextSibling)
    titulo.parentNode.insertBefore(btdiminui, titulo.nextSibling)
    titulo.parentNode.insertBefore(btaumenta, titulo.nextSibling)

    btaumenta.addEventListener('click', function() {
        if (tam < 5) {
            tam += 0.5
        } 
        titulo.style.fontSize = `${tam}em`
    })
    btdiminui.addEventListener('click', function() { 
        if (tam > 1) {
            tam -= 0.5
        }
        titulo.style.fontSize = `${tam}em`
    })
} 

for (i = 1; i < 7; i++) {
    titulo = document.querySelector(`h${i}`) 
    if (titulo != null) {
        createbts() 
        break
    }
} 
