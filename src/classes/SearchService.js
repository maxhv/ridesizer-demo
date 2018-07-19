import bikeData from '../data/bikeData';
import Bike from './Bike';
import Range from './Range';

export default class SearchService {

    constructor() {
        this.bikes = bikeData.bikes;
    }

    // = search bike depends on child height and unit =
    matchBike(filter) {

        const height = filter.unit === 'inches' ? parseInt(filter.height, 10) : parseInt(filter.height / 2.54, 10);

        const bikeResult = this.bikes.filter((bike) => Number(height) === Number(bike.heightInch))[0];

        const bike = bikeResult ? bikeResult : this.bikes[0];

        return new Bike(bike.id, bike.title, bike.heightInch, bike.folder, bike.colors, bike.wheel);

    }

    // = set default bike (now it is the first one) =
    defaultBike() {

        return new Bike(this.bikes[0].id, this.bikes[0].title, this.bikes[0].heightInch, this.bikes[0].folder, this.bikes[0].colors, this.bikes[0].wheel);
    }

    // = get range of bikes models height =
    getHeightRange() {

        const heightRange = [];

        this.bikes.map((bike) => heightRange.push(bike.heightInch));

        return new Range(Math.min(...heightRange), Math.max(...heightRange))
    }

};

