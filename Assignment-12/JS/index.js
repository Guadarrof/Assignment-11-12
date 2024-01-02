let tematica=document.getElementById("tematica");
let selectValue=document.getElementsByTagName("option");
let chkSuperpuesto=document.getElementById("idChkSuperpuesto");
let circles=document.getElementsByClassName("circle");
let idSelector=document.getElementById('idSelector');
let windowWidth= window.innerWidth;

documentColors=["#004165", "#fbc834","#00535e","#00a0af"];

tematica.innerText="Tematica elegida: Agencia de viajes";

idSelector.innerHTML=crearSelect();

function crearSelect(){
    let contador=1;
    let htmlSelect='<select name="colores" id="colores">';
    htmlSelect= htmlSelect.concat('<option value="">Selecciona un color</option>');
    for (let index = 0; index < documentColors.length; index++) {
        htmlSelect= htmlSelect.concat('<option style="color:'+documentColors[index]+' " value="'+documentColors[index]+'" class="colorSamples"> Color N° '+contador+' </option>');
        contador++;
    }
    htmlSelect= htmlSelect.concat('</select>');
    return htmlSelect;
}

let options=document.getElementById("colores");


function limpiarCirculos(){
    for (let index = 0; index < circles.length; index++) {
        circles[index].style.backgroundColor="white";     
    }
}

function paintCircles(e){
    limpiarCirculos();
    let idSelected=e.target.getAttribute("id");
    if(!chkSuperpuesto.checked)
    {
        let circuloSelected= document.getElementById(idSelected);
        circuloSelected.style.backgroundColor=options[options.selectedIndex].value;
    }
    else{
        for (let index = 0; index < circles.length; index++) {
            if(circles[index].getAttribute("id") ==idSelected)
            {
                circles[index].style.backgroundColor=options[options.selectedIndex].value;
                break;
            }
            else
            {
                circles[index].style.backgroundColor=options[options.selectedIndex].value;            
            }           
        }
    }
}

addEventListenerCirculos();
function addEventListenerCirculos(){
    for (let index = 0; index < circles.length; index++) {
        circles[index].addEventListener('click', paintCircles);
    }
}

function removeEventListenerCirculos() {
    for (let index = 0; index < circles.length; index++) {
        circles[index].removeEventListener('click', paintCircles);
    }
}

let colorSamples=document.getElementsByClassName("colorSamples");

let buttonReset=document.getElementsByTagName("button");

function enableBtnReset(){
    buttonReset[0].addEventListener("click", limpiarCirculos);
}

function disableBtnReset(){
    buttonReset[0].removeEventListener("click", limpiarCirculos);
}
function disableButtons(){
    if (windowWidth <= 500){
        for (let index = 0; index < circles.length; index++) {
            circles[index].style.backgroundColor="#877f7d";     
        }
       options.disabled=true;
       chkSuperpuesto.disabled=true;
       removeEventListenerCirculos();
       disableBtnReset();
    } else {
        options.disabled=!options.disabled;
        chkSuperpuesto.disabled=!chkSuperpuesto.disabled;
        enableBtnReset();
    }
}


window.addEventListener("resize", disableButtons)

disableButtons();