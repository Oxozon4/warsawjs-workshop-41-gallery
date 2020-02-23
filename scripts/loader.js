const loader = {
    show: function () {
        // 1. Get reference to Dom element
        const $photos = document.querySelector('#photos');
        // 2. Create HtmlImageElement
        const $loader = document.createElement('img');
        $loader.classList.add('loader');
        // 3. set "src" atr
        $loader.src ='images/loader.gif';
        // 4. Render HtmlImageElement into element from 1.
        $photos.append($loader);
    },
    hide() { // Object Method Shorthand Definition
    // Object Method Shorthand Definition
     // 1. get referance
     // remove html element
     const $photos = document.querySelector('#photos');
     const $loader = $photos.querySelector('.loader');
     $loader.remove();
    }
};