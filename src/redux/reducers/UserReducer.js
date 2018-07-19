const UserReducer = (
    state =
        {
            date: '',
            birth: {},
            email: '',
            user: {},
            willLast: {}
        }, action) => {
    switch (action.type) {
        case 'IDENTIFY_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_DAY_OF_BIRTH':
            return {
                ...state,
                date: action.date,
                birth: action.birth
            };
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email
            };
        case 'SET_BIKE_WILL_LAST':
            return {
                ...state,
                willLast: action.willLast
            }
        default:
            return state;
    }
};

export default UserReducer;