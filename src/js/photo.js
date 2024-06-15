document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        container.addEventListener('mouseover', () => {
            const info = container.querySelector(".before");
            info.style.bottom = "2.5em";
        });

        container.addEventListener('mouseout', () => {
            const info = container.querySelector(".before");
            info.style.bottom = "0";
        });
    });
});
