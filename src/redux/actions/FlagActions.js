import { EventTypes } from 'redux-segment';

const showSubmitModal = ({ showSubmit = false }) => ({
    type: 'SHOW_SUBMIT',
    showSubmit
})

const setPlay360 = ({ play360 = false }) => ({
    type: 'PLAY_360',
    play360,
    meta: {
        analytics: {
            eventType: EventTypes.track,
            eventPayload: {
                event: 'CLICK_360',
                properties: {
                    play360
                },
            },
        },
    },    
});

const switchTo360 = ({ is360 = true }) => ({
    type: 'SWITCH_360',
    is360
});

export {
    switchTo360,
    setPlay360,
    showSubmitModal,
};