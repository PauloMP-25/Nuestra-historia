// modal.js
function openModal(id) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    let content = '';

    switch (Number(id)) {

        case 1:
            content = `
        <h2>ES QUE NO SABES, LO QUE TU ME HACES SENTIR</h2>
        <iframe src="latiendo.html" style="width:100%; height:350px; border:none; border-radius:10px; overflow:hidden;"></iframe>
      `;
            break;
        case 2:
            content = `
        <h2>AL UNIVERSO LE DARIA VERGUENZA COMPARARSE CON EL AMOR QUE SIENTO POR TI</h2>
        <iframe src="corazon.html" style="width:100%; height:350px; border:none; border-radius:10px; overflow:hidden;"></iframe>
      `;
            break;

        case 3:
            content = `
        <h2>PERDON POR TAN POCO MI AMORCITO</h2>
        <iframe src="floresamarillas.html" style="width:100%; height:650px; border:none; border-radius:10px; overflow:hidden;"></iframe>
      `;
            break;
        default:
            content = `<h2>Evento</h2><p>Contenido no disponible.</p>`;
    }

    modalBody.innerHTML = content;
    modal.classList.remove('hidden');

    // cerrar con la X
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = () => closeModal();
    }

    // cerrar al hacer click fuera del contenido
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    if (modal) modal.classList.add('hidden');
    if (modalBody) modalBody.innerHTML = '';
}

function playSong(src) {
    try {
        const audio = new Audio(src);
        audio.play();
    } catch (e) {
        console.warn('No se pudo reproducir la canción:', e);
    }
}
