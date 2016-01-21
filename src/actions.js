import { SEND_MESSAGE } from './action-types'

export function sendMessage(messageText = "", author = "anon") {
    return {
        type: SEND_MESSAGE,
        messageText,
        author
    };
}