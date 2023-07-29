const colorBox = document.getElementById('color-box')
const hexBox = document.getElementById('hex-box')
const numOfColors = document.getElementById('color-number').value


document.getElementById('color-form').addEventListener('submit', event => {
    event.preventDefault()
    
    colorBox.innerHTML = ''
    hexBox.innerHTML = ''
    
    const seedColor = document.getElementById('color-input').value.replace('#','')
    const modeOfColors = document.getElementById('color-mode').value.toLowerCase()
    
    fetch(`https://www.thecolorapi.com/scheme?mode=${modeOfColors}&hex=${seedColor}&count=${numOfColors}`)
    .then(res => res.json())
    .then(data => {
       for(let i = 0; i < data.count; i++){
           renderColor(data.colors[i].hex.value, i)
           renderHexValue(data.colors[i].hex.value, i)
       }
    })
})

document.addEventListener('click', event => {
    if(event.target.id === '0' || event.target.id === '0hex'){
        /* get color as rgb string and convert to array of numbers */
        const color = document.getElementById('0').style.backgroundColor.match(/\d+/g)
        copyHexValue(color)
    }
    else if(event.target.id === '1' || event.target.id === '1hex'){
        const color = document.getElementById('1').style.backgroundColor.match(/\d+/g)
        copyHexValue(color)
    }
    else if(event.target.id === '2' || event.target.id === '2hex'){
        const color = document.getElementById('2').style.backgroundColor.match(/\d+/g)
        copyHexValue(color)
    }
    else if(event.target.id === '3' || event.target.id === '3hex'){
        const color = document.getElementById('3').style.backgroundColor.match(/\d+/g)
        copyHexValue(color)
    }
    else if(event.target.id === '4' || event.target.id === '4hex'){
        const color = document.getElementById('4').style.backgroundColor.match(/\d+/g)
        copyHexValue(color)
    }
    else if(event.target.id === '5' || event.target.id === '5hex'){
        const color = document.getElementById('5').style.backgroundColor.match(/\d+/g)
        copyHexValue(color)
    }
    else if(event.target.id === '6' || event.target.id === '6hex'){
        const color = document.getElementById('6').style.backgroundColor.match(/\d+/g)
        copyHexValue(color)
    } 
        
})

function renderColor(color, id){
    let colorContainer = document.createElement('div')
    colorContainer.classList.add('color-container')
    colorContainer.id = id
    colorContainer.style.backgroundColor = color
    colorBox.appendChild(colorContainer)
}

function renderHexValue(hexValue, id){
    let hexContainer = document.createElement('div')
    hexContainer.classList.add('hex-container')
    hexContainer.id = id
    hexContainer.textContent = hexValue
    hexBox.appendChild(hexContainer)
}

function rgbToHex(r, g, b) {
  return('#' + valueToHex(r) + valueToHex(g) + valueToHex(b))
}

function valueToHex(c) {
  return c.toString(16)
}

function copyHexValue(color){
    navigator.clipboard.writeText(rgbToHex(color[0], color[1], color[2]))
            .then(showSnackBar())
}

function showSnackBar() {
  var sb = document.getElementById("snackbar");
  //this is where the class name will be added & removed to activate the css
  sb.className = "show";
  setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 1000);
}