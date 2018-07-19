import database from '../../firebase/firebase';

import { EventTypes } from 'redux-segment';

import Estimation from '../../classes/Estimation';
import Filter from '../../classes/Filter';

import { user, setBikeWillLast } from './UserActions';

import formatRange from '../../functions/formatRange';

const searchService = new SearchService();

const defaultValue = searchService.getHeightRange().min;
const defaultBike = searchService.defaultBike();

const maxRiderHeight = searchService.getHeightRange().max;
const inchToCMIndex = 2.54;

const id = user.id;

const matchCurrentBike = (value, unit, folder) => {

    const filter = new Filter(value, unit, folder);
    const bike = searchService.matchBike(filter)

    return bike;
}

const setValue = ({ rangeValue = defaultValue } = {}) => ({
    type: 'SET_VALUE',
    rangeValue
});

const setColor = ({ color = 'default' }) => ({
    type: 'SET_COLOR',
    color
});

const setBike = ({ bike = defaultBike }) => ({
    type: 'SET_BIKE',
    bike,
});

const setFinalBike = ({ bike = defaultBike }, userId) => ({
    type: 'SET_FINAL_BIKE',
    bike,
    meta: {
        analytics: {
            eventType: EventTypes.identify,
            eventPayload: {
                userId,
                traits: {
                    height: bike.height,
                    size: bike.wheel,
                    color: bike.color
                }
            },
        },
    },   
});

const setUnit = ({ unit = 'inches' }) => ({
    type: 'SET_UNIT',
    unit
})

const setBikeDatabase = ({ bike }) => {

    return (dispatch) => {
    
        const height = bike.height;
        const wheel = bike.wheel;
        const color = bike.color;

        const bikeOptions = {
            height:
                {
                    inches: Math.floor(height),
                    cm: Math.floor(height * 2.54),
                    feetAndInches: `${Math.trunc(height / 12)} feets ${height % 12} inches`
                }
            ,
            wheel,
            color
        }

        dispatch(setFinalBike({ bike }));        

        return database.ref(`user_${id}/bike`).update(bikeOptions)
    }
};

const setRange = (rangeValue, unit) => {

    const bike = matchCurrentBike(rangeValue, unit);

    return (dispatch, getValue) => {

        const color = getValue().bike.color;

        bike.color = color;

        dispatch(setBike({ bike }));     
        dispatch(setColor({ color }));

    }

};

const setRangeComplete = (rangeValue, unit, date) => {

    const bike = matchCurrentBike(rangeValue, unit);

    return (dispatch, getValue) => {

        const color = getValue().bike.color;
        bike.color = color;        

        dispatch(setBikeDatabase({ bike }));
        dispatch(setValue({ rangeValue }));
        dispatch(setUnitDatabase({ unit }));  
        dispatch(setColorDatabase(undefined, bike));
        
        if (date) {
            const willLast = new Estimation(date, bike.height).getWillLast(bike, unit, color);
            dispatch(setBikeWillLast({ willLast }))
        }
    }
    
};

const setInputComplete = (event, unit, date) => {

    const currentMax = formatRange(unit, maxRiderHeight, inchToCMIndex);

    // = if manual input heigher than max, set it to max value =
    let rangeValue = event.target.value > currentMax ? currentMax : Number(event.target.value);

    const bike = matchCurrentBike(rangeValue, unit);

    return (dispatch, getValue) => {

        const color = getValue().bike.color;
        bike.color = color;        

        dispatch(setBikeDatabase({ bike }));
        dispatch(setUnitDatabase({ unit }));
        dispatch(setColorDatabase(undefined, bike));

        if (date) {
            const willLast = new Estimation(date, bike.height).getWillLast(bike, unit, color);
            dispatch(setBikeWillLast({ willLast }))
        }
    }

};

export {
    setRange,
    setRangeComplete,
    setInputComplete,
    setFirstBike,
    setBike,
    setFinalBike,
    setBikeDatabase,
    setValue,
    setColor,
    setColorDatabase,
    setBikeWillLast,
    setUnit,
    setUnitDatabase
};