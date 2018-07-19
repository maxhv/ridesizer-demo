export default class Bike360 {

    constructor(bike, color = 'blackblue') {
        this.folder = bike.folder;
        this.colors = bike.colors;
        this.wheel = bike.wheel;
        this.color = color;
    }

    // = get array for Rotation component =
    getImages() {

        const selectedColor = this.colors.filter((color) => color === this.color)[0];

        const maxImagesFor360 = 36;

        const createSRC = (index = 1) => `i/${this.folder}/${this.wheel}/${selectedColor ? selectedColor : this.colors[0]}/${index}.jpg`;

        // = create array of images for rotation =
        for (let i = 1; i <= maxImagesFor360; i++) {
            let imgSRC = createSRC(i);
            imgArray.push(<img key={i} src={imgSRC} width="512" height="512" alt="bike" />
            )
        }

        return imgArray;

    }

}