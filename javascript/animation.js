function startFlowers() {
    const container = document.getElementById("flowers-container");

    for (let i = 0; i < 10; i++) {
        let flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = `${Math.random() * 80 + 10}%`;
        flower.style.animationDuration = `${3 + Math.random() * 2}s`;
        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 5000);
    }

    // seguir lanzando flores cada cierto tiempo
    setInterval(() => {
        let flower = document.createElement("div");
        flower.classList.add("flower");
        flower.style.left = `${Math.random() * 80 + 10}%`;
        flower.style.animationDuration = `${3 + Math.random() * 2}s`;
        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 5000);
    }, 800);
}
