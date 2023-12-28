let tematica=document.getElementById("tematica");
let selectValue=document.getElementsByTagName("option");
let options=document.getElementById("colores");
let circles=document.getElementsByClassName("circle");

tematica.innerText="Tematica elegida: Agencia de viajes";

documentColors=["#004165", "#fbc834","#00535e","#00a0af"];

options.addEventListener('change', optionSelected);

// function optionSelect(){
//     for (let a = 0; a <= selectValue.length; a++) {    
//     let optionChosen=selectValue[a].value
//         if (optionChosen && a !==0){
//             let circleClass=circles[a].classList
//             if (circleClass.contains("blue-circle")){
//             circles[0].style.backgroundColor=documentColors[0];
//             } else if (circleClass.contains("yellow-circle")){
//                 circles[1].style.backgroundColor=documentColors[1];
//             } else if (circleClass.contains("indigo-circle")){
//                 circles[2].style.backgroundColor=documentColors[2];
//             } else{
//                 circles[3].style.backgroundColor=documentColors[3];
//             }
//         }
//     }
// }


// function optionSelected(){
//     for (let v = 0; v < selectValue.length; v++) {
//         selectValue[v]
//         if (v!==0){
//         if (selectValue[1]){
//             circles[0].style.backgroundColor=documentColors[0];
//         }else if (selectValue[2]){
//             circles[1].style.backgroundColor=documentColors[1];
     
//         }
//         else if (selectValue[3]){
//             circles[2].style.backgroundColor=documentColors[2];
    
//         }
//         else{
//             circles[3].style.backgroundColor=documentColors[3];
//         }
//         }
//     }
// }
