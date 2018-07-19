import SearchService from '../../classes/SearchService';

const searchService = new SearchService();

const minBikeHeight = searchService.getHeightRange().min;

const BikeReducer = (
    state =
        {
            bike: {},
            rangeValue: minBikeHeight,
            color: 'blackblue',
            willLast: 0,
            unit: 'inches',
            emailData: {}
        }, action) => {
    switch (action.type) {
        case 'SET_BIKE':
            return {
                ...state,
                bike: action.bike
            };
        case 'SET_FINAL_BIKE':
            return {
                ...state,
                bike: action.bike
            };
        case 'SET_VALUE':
            return {
                ...state,
                rangeValue: action.rangeValue
            };
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            };
        case 'SET_BIKE_WILL_LAST':
            return {
                ...state,
                willLast: action.willLast
            };
        case 'SET_UNIT':
            return {
                ...state,
                unit: action.unit
            };
        case 'EMAIL_DATA':
            return {
                ...state,
                emailData: action.emailData
            };
        default:
            return state;
    }
};

export default BikeReducer;