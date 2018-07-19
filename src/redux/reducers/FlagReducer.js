const FlagReducer = (
    state =
        {
            is360: true,
            play360: false,
            showSubmit: false,
        }, action) => {
    switch (action.type) {
        case 'SWITCH_360':
            return {
                ...state,
                is360: action.is360
            };
        case 'PLAY_360':
            return {
                ...state,
                play360: action.play360
            };
        case 'SHOW_SUBMIT':
            return {
                ...state,
                showSubmit: action.showSubmit
            };
        default:
            return state;
    }
};

export default FlagReducer;