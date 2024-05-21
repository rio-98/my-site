document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.number');

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const speed = +counter.getAttribute('data-speed'); // Get the individual speed

            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1); // Control the delay for update
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
