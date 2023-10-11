'use strict';

const panels = document.querySelectorAll('.panel');

const removeActive = () => panels.forEach(p => p.classList.remove('active'));
const addActive = target => target.classList.add('active');

panels.forEach(panel => {
    panel.addEventListener('click', function ({ target }) {
        removeActive();
        addActive(target);
    });
});
