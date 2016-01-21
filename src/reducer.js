import { SEND_MESSAGE } from './action-types'

export default function reducer(state = {}, action) {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case SEND_MESSAGE:
            newState.messages.push(action)
    }

}