import * as joinUtil from '../util/join_util';
export const CREATEJOIN = "CREATEJOIN";
export const DELETEJOIN = "CREATEJOIN";

const receiveJoin = payload => ({
    payload, 
    type: CREATEJOIN
})

const removeJoin = payload => ({
    join: payload.join,
    event: payload.event,
    type: DELETEJOIN
})

export const createJoin = join => dispatch => {
    joinUtil.joinCreate(join).then(payload => 
        dispatch(receiveJoin(payload)))
}

export const deleteJoin= join => dispatch => {
    joinUtil.joinDelete(join.id).then(payload => 
        dispatch(removeJoin(payload)))
}


