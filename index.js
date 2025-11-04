//------------RELOJ--------
const reloj = document.getElementById('reloj');

// 🕒 Lista de horas secretas (24h)
const horasSecretas = [
  { hora: 14, minuto: 15, url: "/compra.html?id=99" },
  { hora: 20, minuto: 33, url: "/compra.html?id=100" },
  { hora: 20, minuto: 34, url: "/compra.html?id=100" },
  { hora: 20, minuto: 35, url: "/compra.html?id=100" },
];

// Actualiza el reloj cada segundo
setInterval(() => {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');

  reloj.textContent = `${horas}:${minutos}`;

  // Busca si la hora actual coincide con alguna hora secreta
  const eventoActivo = horasSecretas.find(
    e => e.hora === ahora.getHours() && e.minuto === ahora.getMinutes()
  );

  if (eventoActivo) {
    reloj.classList.add('secret');
    reloj.onclick = () => {
      window.location.href = eventoActivo.url;
    };
  } else {
    reloj.classList.remove('secret');
    reloj.onclick = null;
  }
}, 1000);


//------------carrusel--------
const carrusel = document.getElementById('carrusel');

if (carrusel) {
  const productos = Array.from(carrusel.querySelectorAll('.producto'));
  const visibles = 3;

  function mostrarAleatorios() {
    productos.forEach(p => p.classList.remove('visible'));
    const seleccion = [];

    while (seleccion.length < visibles) {
      const aleatorio = productos[Math.floor(Math.random() * productos.length)];
      if (!seleccion.includes(aleatorio)) seleccion.push(aleatorio);
    }

    seleccion.forEach((p, i) => {
      p.style.left = `${i * 310}px`;
      setTimeout(() => p.classList.add('visible'), i * 150);
    });
  }

  mostrarAleatorios();
  setInterval(mostrarAleatorios, 3000);
}



