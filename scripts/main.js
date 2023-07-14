const { createApp, ref } = Vue

createApp({
    setup() {
        return {
            openItem: function (idx) {
                const activeItem = document.querySelector('li.active');
                const list = document.querySelectorAll('li');
                if (activeItem && activeItem !== list[idx]) {
                    activeItem.classList.remove('active');
                }
                list[idx].classList.toggle('active');
            }
        }
    }
}).mount('#app')