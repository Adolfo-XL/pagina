function activeTodo(){
    mostrarPanel();
    modificContenido();
}

function activeTodo2(){
    mostrarPanel2();
    modificContenido();
}

function activeTodo3(){
    mostrarPanel3();
    modificContenido2();
}

function activeTodo4(){
    mostrarPanel4();
    modificContenido2();
}

function activeTodo5(){
    mostrarPanel5();
}

function cambiarImagen() {
    const img = document.getElementById("miImagen");
    img.src = img.src.includes("img/Personaje.png") ? "img/Chica1.png" : "img/Personaje.png";
}

function mostrarPanel() {
    const panel = document.getElementById("pnl");
    panel.classList.remove("oculto"); //removemos la clase oculto para que se vea el panel
    setTimeout(() => panel.classList.add("activo"), 200);
}

function mostrarPanel2() {
    const panel = document.getElementById("pnl2");
    panel.classList.remove("oculto"); //removemos la clase oculto para que se vea el panel
    setTimeout(() => panel.classList.add("activo"), 200);
}

function mostrarPanel3() {
    const panel = document.getElementById("pnl3");
    panel.classList.remove("oculto"); //removemos la clase oculto para que se vea el panel
    setTimeout(() => panel.classList.add("activo"), 200);
}

function mostrarPanel4() {
    const panel = document.getElementById("pnl4");
    panel.classList.remove("oculto"); //removemos la clase oculto para que se vea el panel
    setTimeout(() => panel.classList.add("activo"), 200);
}

function mostrarPanel5() {
    const panel = document.getElementById("pnl5");
    panel.classList.remove("ocultop"); //removemos la clase oculto para que se vea el panel
    setTimeout(() => panel.classList.add("activo"), 200);
}

function modificContenido() {
    const btns = document.getElementById("btns");
    btns.classList.remove("column-btn"); //removemos la clase cntdr-btns para que se modifique el gap de 5rem a 1rem
    setTimeout(() => btns.classList.add("activo1"), 400);
}

function modificContenido2() {
    const btns2 = document.getElementById("btns2");
    btns2.classList.remove("column-btn"); //removemos la clase cntdr-btns para que se modifique el gap de 5rem a 1rem
    setTimeout(() => btns2.classList.add("activo2"), 400);
}


// Ocultar al hacer clic fuera
document.addEventListener("click", function(e) {
    const panel = document.getElementById("pnl"); // declaramos el panel
    const panel2 = document.getElementById("pnl2"); // declaramos el panel2
    const panel3 = document.getElementById("pnl3"); // declaramos el panel3
    const panel4 = document.getElementById("pnl4"); // declaramos el panel4
    const panel5 = document.getElementById("pnl5"); // declaramos el panel4
    const btns = document.getElementById("btns"); // declaramos el contenedor de los botones
    const btns2 = document.getElementById("btns2"); // declaramos el contenedor de los botones
    const pushbtn = document.getElementById("pushbtn"); 
    const pushbtn2 = document.getElementById("pushbtn2"); 
    const pushbtn3 = document.getElementById("pushbtn3"); 
    const pushbtn4 = document.getElementById("pushbtn4"); 
    const pushbtn5 = document.getElementById("pushbtn5"); 


    if(!panel.contains(e.targer)&&!pushbtn.contains(e.target)){
        panel.classList.remove("activo");
        setTimeout(() => panel.classList.add("oculto"), 300);
        if(!btns.contains(e.target)&&!pushbtn2.contains(e.target)){
            btns.classList.remove("activo1");
            setTimeout(() => btns.classList.add("column-btn"), 400); 
        }
    }
    
    if(!panel2.contains(e.targer)&&!pushbtn2.contains(e.target)){
        panel2.classList.remove("activo");
        setTimeout(() => panel2.classList.add("oculto"), 300);
        if(!btns.contains(e.target)&&!pushbtn.contains(e.target)){
            btns.classList.remove("activo1");
            setTimeout(() => btns.classList.add("column-btn"), 400);
        }
    }
        
    if(!panel3.contains(e.targer)&&!pushbtn3.contains(e.target)){
        panel3.classList.remove("activo");
        setTimeout(() => panel3.classList.add("oculto"), 300);
        if(!btns2.contains(e.target)&&!pushbtn4.contains(e.target)){
            btns2.classList.remove("activo2");
            setTimeout(() => btns2.classList.add("column-btn"), 400);
        }
    }
    
    if(!panel4.contains(e.targer)&&!pushbtn4.contains(e.target)){
        panel4.classList.remove("activo");
        setTimeout(() => panel4.classList.add("oculto"), 300);
        if(!btns2.contains(e.target)&&!pushbtn3.contains(e.target)){
            btns2.classList.remove("activo2");
            setTimeout(() => btns2.classList.add("column-btn"), 400);
        }
    }
    

    if(btns2.contains(e.target) && !pushbtn4.contains(e.target) &&!pushbtn3.contains(e.target)){
        btns2.classList.remove("activo2");
        setTimeout(() => btns2.classList.add("column-btn"), 400);
    }

    if(!panel5.contains(e.targer)&&!pushbtn5.contains(e.target)){
        panel5.classList.remove("activo");
        setTimeout(() => panel5.classList.add("ocultop"), 50);
    }

});

document.addEventListener('click', () => {
  const audio = document.getElementById('bgMusic');
  
  const tiempoGuardado = localStorage.getItem('audioTiempo');

  if (tiempoGuardado) {
    audio.currentTime = parseFloat(tiempoGuardado);
  }

  audio.volume = 0.05;
  audio.play().catch(e => console.log('Autoplay bloqueado:', e));

  setInterval(() => {
    localStorage.setItem('audioTiempo', audio.currentTime);
  }, 1000);

}, { once: true }); // solo se ejecuta una vez


function abrirPaginaHombre() {
  window.location.href = "PAG/Mitos_Realidades/hombre.html";
}

function abrirPaginaMujer() {
  window.location.href = "PAG/Mitos_Realidades/mujer.html";
}

function abrirPaginaInformaicon() {
  window.location.href = "PAG/Mitos_Realidades/informacion.html";
}



function abrirPaginaHdlselah() {
  window.location.href = "PAG/Historia/hdlselah.html";
}

function abrirPaginaEnfoquesc(){
  window.location.href = "PAG/Historia/enfoquesc.html";
}

function abrirPaginaActual() {
  window.location.href = "PAG/Historia/actual.html";
}



function abrirPaginaPintura() {
  window.location.href = "PAG/Erotismo/pintura.html";
}

function abrirPaginaCEEAC(){
  window.location.href = "PAG/Erotismo/ceeac.html";
}

function abrirPaginaLEPE() {
  window.location.href = "PAG/Erotismo/lepe.html";
}



function abrirPaginaCIHS() {
  window.location.href = "PAG/Salud/cihs.html";
}

function abrirPaginaCIHS2(){
  window.location.href = "PAG/Salud/cihs2.html";
}

function abrirPaginaPPD() {
  window.location.href = "PAG/Salud/ppd.html";
}

