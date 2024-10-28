let btn = document.getElementById("flicker")
let code = document.getElementById("codeColor")
let change = document.getElementById("flip")

// Color Code
let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//Event Listener
  btn.addEventListener('click',function(){
   let hexColor = "#"

for(let i=1;i<=6;i++){
    hexColor += randomColor()
}

change.style.backgroundColor = hexColor

code.style.color = hexColor
code.innerHTML = hexColor

  })



// set random color function
function randomColor(){
    let randomIndex = Math.floor(Math.random ()*16)
    return hex[randomIndex]
    
}