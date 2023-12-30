const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let rectangle1_el = document.getElementById("rectangle1")
let rectangle2_el = document.getElementById("rectangle2")
let passwordLength = 0  
function generateRandomPassword(){
    let passwordArray1 = []
    let passwordArray2 = []
    for (let i = 0; i < passwordLength ; i++){
        passwordArray1.push(characters[Math.floor(Math.random()*characters.length)])
        passwordArray2.push(characters[Math.floor(Math.random()*characters.length)])
    }
    let passwordString1 = passwordArray1.join("")
    let passwordString2 = passwordArray2.join("")
    rectangle1_el.textContent = passwordString1
    rectangle2_el.textContent = passwordString2
}

function reset(){
    rectangle1_el.textContent = ""
    rectangle2_el.textContent = ""
}

function onSubmit(event) {
  event.preventDefault(); 

  if(event.target.elements.name) {
    var length = event.target.elements.name.value; 
    passwordLength = length
  }
  generateRandomPassword();
}

