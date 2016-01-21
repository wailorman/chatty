import { SEND_MESSAGE } from './action-types'

export function sendMessage(messageText = "") {
    return {
        type: SEND_MESSAGE,
        messageText
    };
}