// script.js
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const images = [
        'church1.jpg',
        'church2.jpg',
        'church3.jpg'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    heroSection.style.backgroundImage = url(${randomImage});
});

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.service-item');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('h3').textContent;
            const content = item.innerHTML;
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>${title}</h2>
                    ${content}
                </div>
            `;
            modal.style.display = 'block';

            const closeModal = modal.querySelector('.close-modal');
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


// script.js
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.event-filter button');
    const eventItems = document.querySelectorAll('.event-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            eventItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});