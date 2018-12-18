import * as joinUtil from '../util/join_util';
export const CREATEJOIN = "CREATEJOIN";
export const DELETEJOIN = "CREATEJOIN";

const receiveJoin = join => ({
    join, 
    type: CREATEJOIN
}),

const removeJoin = join => ({
    joinId: join.id,
    type: DELETEJOIN
})

export const fetchCreate = join => dispatch => {
    joinUtil.joinCreate(join).then(join => 
        dispatch(receiveJoin(join)))
}

export const fetchCreate = join => dispatch => {
    joinUtil.joinCreate(join.id).then(join => 
        dispatch(removeJoin(join)))
}


