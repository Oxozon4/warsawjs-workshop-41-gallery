function renderPhoto(photo) {
    console.log('photo', photo)
    // Create HTMLImageElement
    const $photo = document.createElement('img');
    $photo.src = photo.url;
    // $photo.setAttribute('src', photo); Different style
    //Render
    const $photos = document.querySelector('#photos');
    $photos.append($photo);
}
function renderPhotos(photos) {
    photos.forEach(function (photo) {
        try {renderPhoto(photo);
        }
        catch (err) {
            console.warn(err);
            renderPhoto({ url: 'https://placehold.co/200x300' })
        }
    });
}
function displayMessage(message) {
    const $photos = document.querySelector('#photos');
    const $message = document.createElement('div');
    $message.classList.add('message'); // for class
    // $message.class.id = message
    // const $header = document.createElement('div');
    // $header.classList.add('message-header');
    // $header.textContent = 'Message to the user';
    // const $body = document.createElement('div');
    // $body.classList.add('message-body');
    // $body.textContent = "Gallery is empty. We don't have any photos";
    // $message.append($header);
    // $message.append($body);
    $photos.append($message);
    // Interpolation
    $message.innerHTML = `
    <div class="message-header">
        Message
    </div>
    <div class="message-body">
       ${message}
    </div>
    `;
}
function displayEmptyGalleryMessage() {
    displayMessage("Gallery is empty. We don't have any photos");
}
function displayCurrentTime() {
    setInterval(function () {
        // 1. Get referance to DOM element
        const $clock = document.querySelector('#current-time');
        // 2. Get current time from Date Object
        const date = new Date();
        const currentDate = date.toLocaleTimeString('pl');
        // 3. Render time to DOM element
        $clock.textContent = currentDate;
    }, 1000)
}
function randomInteger(from, to) {
    return Math.round(Math.random() * (to - from) + from);
}

function displayRandomPhoto(photos) {
    // get referance
    const $container = document.querySelector('#random-photo');
    // Generate random number 
    const random = randomInteger(0,2);
    // Get photo
     const randomPhoto = photos[random];
    // Render
    const $randomPhoto = document.createElement('img');
    $randomPhoto.src = randomPhoto.url;
    $container.append($randomPhoto);
}

function main() {
    loader.show();

    setTimeout(function () {
    const photos = [
       { url: "https://i.picsum.photos/id/1036/200/300.jpg"},
       { url: "https://i.picsum.photos/id/1035/200/300.jpg"},
       { url: "https://i.picsum.photos/id/1033/200/300.jpg"},
       null
    ];
    //renderPhotos(photos);
    const isGalleryEmpty = (photos.length === 0);
    loader.hide();
    
    if (isGalleryEmpty) {
        displayEmptyGalleryMessage();
    }
    else {
        renderPhotos(photos);
    }
    displayRandomPhoto(photos);
}, 2000);

displayCurrentTime();
    // var let const    const be cant change referance to value
}
window.addEventListener('hashchange', function () {
    
    const $photos = document.querySelector('#photos');
    const $randomPhoto = document.querySelector('#random-photo');

    // switch (this.location.hash) {
    //     case '':
    //         $randomPhoto.style.display = 'none';
    //     $photos.style.display = 'block';
    //     break;

    //     case '#random':
    //         console.log('hash is not empty');
    //     $randomPhoto.style.display = 'block';
    //     $photos.style.display = 'none';
    //     break;
    //     default:
    //         $randomPhoto.style.display = 'none';
    //       $photos.style.display = 'none';
    // }

    if (location.hash.length === 0)
    {
        console.warn('hash is empty');
        //hide randdom photo and show gallery container
        $randomPhoto.style.display = 'none';
        $photos.style.display = 'block';
    }
    else if (this.location.hash === '#random'){
        console.log('hash is not empty');
        $randomPhoto.style.display = 'block';
        $photos.style.display = 'none';
    }
    else {
        $randomPhoto.style.display = 'none';
        $photos.style.display = 'none';
    }
})
main();