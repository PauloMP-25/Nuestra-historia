// timeline.js
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.timeline-item');
    let selectedIndex = -1;

    function updateHearts(selected) {
        items.forEach((item, i) => {
            const icon = item.querySelector('.timeline-icon');
            if (!icon) return;

            // escala progresiva: los ítems hasta el seleccionado crecen
            if (selected >= 0 && i <= selected) {
                // ajusta el factor si lo quieres más grande/pequeño
                const scale = 1 + (i + 1) * 0.08;
                icon.style.transform = `scale(${scale})`;
                icon.style.transition = 'transform 300ms ease';
            } else {
                icon.style.transform = 'scale(1)';
                icon.style.transition = 'transform 300ms ease';
            }
        });
    }

    // Añadimos listener a cada icono para actualizar sólo los corazones.
    // NOTE: tu HTML puede tener inline onclick="openModal(n)"; lo dejamos así.
    items.forEach((item, idx) => {
        const icon = item.querySelector('.timeline-icon');
        if (!icon) return;

        icon.addEventListener('click', (e) => {
            // Actualiza el estado visual (no abre modal aquí).
            selectedIndex = idx;
            updateHearts(selectedIndex);

            // Si en el futuro quieres eliminar inline onclick y abrir modal desde aquí:
            // const modalId = item.dataset.modal || (idx + 1);
            // openModal(modalId);
        });
    });

    // estado inicial (ningún corazón crecido)
    updateHearts(-1);
});
