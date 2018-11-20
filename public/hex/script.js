const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


const hexBtn = document.getElementById("hexBtn");
const bodi = document.getElementById("bodi");
const hex = document.getElementById("hex");


hexBtn.addEventListener('click', color);

function color (){
  let hexColor='#'
    for (let i =0; i<6; i++){
    let random = Math.floor(Math.random()*hexNumbers.length);
    hexColor += hexNumbers[random];
    bodi.style.backgroundColor= hexColor;
    hex.innerHTML = hexColor;
  }
}


// hexBtn.addEventListener("click", function(){
//   let hexColor='#'
//   for (let i =0; i<6; i++){
//   let random = Math.floor(Math.random()*hexNumbers.length);
//   hexColor += hexNumbers[random];
//   bodi.style.backgroundColor= hexColor;
//   hex.innerHTML = hexColor;
// }
// console.log(hexColor);
//
// })
