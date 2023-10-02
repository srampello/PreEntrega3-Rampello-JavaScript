//* Ingreso Plataforma
let user = document.getElementById("user");
let userResult = localStorage.getItem("username");
let userMoney = localStorage.getItem("usermoney");

let lastDisponible = actualizarDinero(0, 0, 1);

if(!userResult){
    Swal.fire({
        title: 'Login Form',
        html: `<input type="text" id="login" class="swal2-input" placeholder="Username">`,
        confirmButtonText: 'Sign in',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          if (!login) {
            Swal.showValidationMessage(`Please enter login`);
          }
          return {login: login}
        }
      }).then((result) => {
        localStorage.setItem("username", result.value.login);
        localStorage.setItem("usermoney", parseFloat(0));
        user.innerHTML = `¡Hola <b>${result.value.login}</b>!`
      })
}else{
    user.innerHTML = `¡Hola <b>${userResult}</b>!`;
}

//* Inicio
let depositar = document.querySelector("#depositar");
depositar.addEventListener("click", function(){
    let suma = prompt("Cuando dinero desea ingresar: ");
    lastDisponible = actualizarDinero(suma, lastDisponible, 2);
})


let dolarMEP = document.querySelector("#dolarmep");
dolarMEP.addEventListener("click", function(){
    let resta = prompt("Dinero a invertir: ");
    lastDisponible = actualizarDinero(resta, lastDisponible, 3);
})


function actualizarDinero(deposito, lastDispo, op){
    let disponible = parseFloat(0);
    switch(op){
        case 1:
            disponible = parseFloat(lastDispo);
            break;
        case 2:
            disponible = parseFloat(lastDispo) + parseFloat(deposito);
            lastDispo = parseFloat(disponible);
            break;
        case 3:
            disponible = parseFloat(lastDispo) - parseFloat(deposito);
            lastDispo = parseFloat(disponible);
        default:
            break;
    }
    localStorage.setItem("usermoney", lastDispo);
    document.getElementById("monto").innerHTML = `${localStorage.getItem("usermoney")}`
    return parseFloat(localStorage.getItem("usermoney"));
}

//* dolar MEP
let ventaMEP = (parseFloat(bonos[1].compra)*parseFloat(bonos[0].venta))/1000;
document.getElementById("ventaMEP").innerHTML = `${ventaMEP.toFixed(2)}`

let compraMEP = parseFloat(bonos[0].compra)/parseFloat(bonos[1].venta);
document.getElementById("compraMEP").innerHTML = `${compraMEP.toFixed(2)}`

/*
document.getElementById("category").onclick = function() {
    var e = document.getElementById("category");
    var value = e.options[e.selectedIndex].value;
    sessionStorage.setItem("valor",value);
}
*/
/*
const result = datoscedear.filter(p => p.cat == "ETFs");
const result1 = datoscedear.filter(p => p.cat == "Crypto");
const result2 = datoscedear.filter(p => p.cat == "Top");

let stringTabla = `<tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>`;
    
let crearTabla = function(){
    for(let ticker of result){
        let fila = `<tr><th>${ticker.ticker}</th>`
        fila += `<th>${ticker.name}</th>`
        fila += `<th>${ticker.value}</th>`
        fila += `<th>${ticker.var}</th>`
        fila += `</tr>`
        stringTabla += fila;
    }
    return stringTabla;
}
    
document.getElementById("tablaETFs").innerHTML = crearTabla(result);
document.getElementById("tablaCrypto").innerHTML = crearTabla(result1);
document.getElementById("tablaTop").innerHTML = crearTabla(result2);
*/

tableETFs();
tableCrypto();
tableTop();

function tableETFs(){
    const result = datoscedear.filter(p => p.cat == "ETFs");

    let stringTabla = `<tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                      </tr>`;
    
    let crearTabla = function(){
        for(let ticker of result){
            let fila = `<tr><th>${ticker.ticker}</th>`
            fila += `<th style="font-size: 12px">${ticker.name}</th>`
            fila += `<th>${ticker.value}</th>`
            fila += `<th>${ticker.var}</th>`
            fila += `</tr>`
            stringTabla += fila;
        }
        return stringTabla;
    }
    
    document.getElementById("tablaETFs").innerHTML = crearTabla(result);
}

function tableCrypto(){
    const result = datoscedear.filter(p => p.cat == "Crypto");
    let stringTabla = `<tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                      </tr>`;
    
    let crearTabla = function(){
        for(let ticker of result){
            let fila = `<tr><th>${ticker.ticker}</th>`
            fila += `<th style="font-size: 12px">${ticker.name}</th>`
            fila += `<th>${ticker.value}</th>`
            fila += `<th>${ticker.var}</th>`
            fila += `</tr>`
            stringTabla += fila;
        }
        return stringTabla;
    }
    document.getElementById("tablaCrypto").innerHTML = crearTabla(result);
}

function tableTop(){
    const result = datoscedear.filter(p => p.cat == "Top");
    let stringTabla = `<tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                      </tr>`;
    
    let crearTabla = function(){
        for(let ticker of result){
            let fila = `<tr><th>${ticker.ticker}</th>`
            fila += `<th style="font-size: 12px">${ticker.name}</th>`
            fila += `<th>${ticker.value}</th>`
            fila += `<th>${ticker.var}</th>`
            fila += `</tr>`
            stringTabla += fila;
        }
        return stringTabla;
    }
    document.getElementById("tablaTop").innerHTML = crearTabla(result);
}
