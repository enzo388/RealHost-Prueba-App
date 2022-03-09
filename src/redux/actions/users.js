import * as type from "../types";

export function getUser(users) {
    return {
        type: type.GET_USER_REQUESTED,
        payload: users,
    }
}