import { SEND_MESSAGE, CHANGE_AUTHOR } from './action-types'

const defaultState = {
    user: {
        name: 'Olive'
    },
    messages: []
};

export default function reducer(state = defaultState, action) {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case SEND_MESSAGE:
            newState.messages.push({
                id: _.uniqueId(),
                messageText: action.messageText,
                author: state.user.name
            });

            return newState;
        case CHANGE_AUTHOR:
            newState.user.name = action.author;

            return newState;
        default:
            return state;
    }

}