import { SEND_MESSAGE, CHANGE_AUTHOR } from './action-types'

export function sendMessage(messageText = "") {
    return {
        type: SEND_MESSAGE,
        messageText
    };
}

export function changeAuthor(author = "Olive") {
    return {
        type: CHANGE_AUTHOR,
        author
    };
}