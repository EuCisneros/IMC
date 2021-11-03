let IMC = document.getElementById("IMC");
let resp = document.getElementById("resp");
let borrar = document.getElementById("borrar");
    borrar-addEventListener("click", clickBorrar);
let calcular = document.getElementById("calcular");
    calcular-addEventListener("click", clickCalcular);

function clickCalcular(){

    let m = document.getElementById("calcular").value; 
    let kg = document.getElementById("peso").value;
    let imc = (kg / (m *m)) * 10000;
    
    IMC.innerHTML = Math.round(imc);

    if( m == ""  || kg == ""){
        alert("Ingrese los datos completos");
        IMC.innerHTML = "";

        return;
    }

    if( imc >= 18.5 && imc <= 24.9){ resp.innerHTML = "Normal";}
    else if( imc >= 25 && imc <= 29.9){ resp.innerHTML = "Mas alto de lo normal";}
    else if( imc >= 30 ){ resp.innerHTML = "Demasiado alto, tiene problemas de obecidad";}
    else if( imc < 18.5 ){ resp.innerHTML = "Mas bajo de lo normal";}
    else{alert("Ingrese correctamente sus datos", IMC.innerHTML ="", resp.innerHTML="");}
}
function clickBorrar(){

    IMC.innerHTML ='';
    resp.innerHTML ='';
}