export const joinCreate = join => {
    return $.ajax({
        method: 'post',
        url: '/api/join_tables',
        data: {join}
    })
}

export const joinDestroy = id => {
    return $.ajax({
        method: 'delete',
        url: `/api/join_tables/${id}`
    })
}