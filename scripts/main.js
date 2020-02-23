function main() {
    // var let const    const be cant change referance to value
    const photos = [
        "https://i.picsum.photos/id/1036/200/300.jpg",
        "https://i.picsum.photos/id/1035/200/300.jpg",
        "https://i.picsum.photos/id/1033/200/300.jpg",
    ];

    for (let i = 0; i < photos.length; i++) {
        const photo = photos [i];
        console.log('photo',i,photo)

        // Create HTMLImageElement
        const $photo = document.createElement('img');
        $photo.src = photo;
        // $photo.setAttribute('src', photo); Diffrent style

        //Render
        const $photos = document.querySelector('#photos');
        $photos.append($photo);
    }
}
main();