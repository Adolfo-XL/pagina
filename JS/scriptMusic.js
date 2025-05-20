
document.addEventListener('click', () => {

  const audio = document.getElementById('bgMusic');

  const tiempoGuardado = localStorage.getItem('audioTiempo');

  if (tiempoGuardado) {
    audio.currentTime = parseFloat(tiempoGuardado);
  }
  audio.volume = 0.05;
  
  audio.play()

  setInterval(() => {
    localStorage.setItem('audioTiempo', audio.currentTime);
  }, 1000);

}, { once: true }); // solo se ejecuta una vez
