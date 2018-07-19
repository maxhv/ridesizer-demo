import SearchService from '../classes/SearchService';
import growthData from '../data/growth';
import Filter from '../classes/Filter';

const growthChanges = growthData.changes;

export default class Estimation {

    constructor(date, height) {
        this.date = date;
        this.height = height;
    }

    // = calculate growth factor =
    matchGrowthRange(months) {

        const ageFilter = growthChanges.filter((item) => Number(item.ageMonthes) < months);
        return ageFilter.length ? Number(ageFilter[ageFilter.length - 1].change) : 1.55;

    }

    // = child age =
    getAge() {

        let months = 0;

        if (this.date) {

            months = (new Date().getFullYear() - this.date.getFullYear()) * 12;
            months -= this.date.getMonth() + 1;
            months += new Date().getMonth() + 1;

            const childChange = this.matchGrowthRange(months);

            return { months, childChange };

        }

        return undefined;

    }

    // = how much current bike will last =
    getWillLast() {

        let months = this.getAge().months;
        let change = this.matchGrowthRange(months);
        let height = Number(this.height);

        let startMonth = months;

        let maxHeight;

        const willLastDinamic = [];

        // = while child height is on the range =
        while (height < maxHeight) {

            height += Number(change);
            months += 6;
            change = this.matchGrowthRange(months);


            const filter = new Filter(Math.round(height));
            const currentAgeBike = new SearchService().matchBike(filter);

            willLastDinamic.push({ height, change, currentAgeBike })

        }

        // = how much current bike will last =
        if (willLastDinamic.length) {

            const lastMonth = willLastDinamic[willLastDinamic.length - 1].currentAgeBike.growthMonths;
            willLastDinamic.map((item) => item.currentAgeBike.lastAge = (lastMonth - item.currentAgeBike.growthMonths) / 12)

        }

        const estimatedAge = (months - startMonth) / 12;

        return { age: estimatedAge, dinamic: willLastDinamic }

    }

}