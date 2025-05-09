
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 

  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openModal(imageId, text) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalText = document.getElementById('modal-text');

    modalImg.src = imageId + '.png';
    modalText.textContent = text;

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}