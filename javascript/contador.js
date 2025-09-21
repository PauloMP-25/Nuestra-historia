
// Fecha objetivo: 12 de octubre a medianoche
const targetDate = new Date("2025-10-12T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "🎉 Ya llegó el gran día ❤️";
        clearInterval(interval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `⏳ TIEMPO RESTANTE PARA VERNOS:<br>` +
        `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // inicializar al cargar
