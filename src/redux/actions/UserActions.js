import database from '../../firebase/firebase';

// Connect to segment analytics
import { EventTypes } from 'redux-segment';

import UserFactory from '../../classes/UserFactory';
import Estimation from '../../classes/Estimation';

const user = new UserFactory();

const identifyUser = ({ user }) => ({
    type: 'IDENTIFY_USER',
    user,
    meta: {
        analytics: {
            eventType: EventTypes.identify,
            eventPayload: {
                userId: user.id,
                traits: {
                    email: user.email
                },
            },
        },
    },
});

const identify = () => {

    const user = user.checkIsCreated() ? user.getCurrent() : user.createNew();

    return (dispatch) => {
        dispatch(identifyUser({ user }));
    }
};

const setBikeWillLast = ({ willLast = {} }) => ({
    type: 'SET_BIKE_WILL_LAST',
    willLast
});


const setEmail = ({ email = '' }) => ({
    type: 'SET_EMAIL',
    email
});


const setUserInfo = (date, bike, unit) => {

    return (dispatch, getValue) => {

        const color = getValue().bike.color;

        const estimation = new Estimation(date, bike.height);
        const age = estimation.getAge();
        const willLastAge = estimation.getWillLast(bike, unit, color).age;
        const estimatedData = estimation.getWillLast(bike, unit, color).dinamic;
        const willLast = estimation.getWillLast(bike, unit, color);

        return database.ref(`user_${user.id}/user/date`).update({ age, willLastAge, estimatedData }).then(() => {
            dispatch(setDayOfBirthDatabase({ date }));
            dispatch(setBikeWillLast({ willLast }));
        })

    }

}

export {
    setUserInfo,
    identifyUser,
    identify,
    setDayOfBirth,
    setDayOfBirthDatabase,
    setEmail,
    setEmailDatabase,
    setBikeWillLast,
    user
};