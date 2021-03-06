import {createSelector} from 'reselect'

export const getUsersSelect = (state) => { 
    return state.usersPage.users
}
export const getPageSizeSelect = (state) => { 
    return state.usersPage.pageSize
}
export const getTotalUsersCountSelect = (state) => { 
    return state.usersPage.totalUsersCount
}
export const getCurrentPageSelect = (state) => { 
    return state.usersPage.currentPage
}
export const getFollowingInProgressSelect = (state) => { 
    return state.usersPage.followingInProgress
}
export const getIsFetchingSelect = (state) => { 
    return state.usersPage.isFetching
}
export const getPortionSizeSelect = (state) => {
    return state.usersPage.portionSize
}

//пример использования reselect (filter используеться как пример сложного селектора)

export const getUsersSelectSuper = createSelector(getUsersSelect, (users) => { 
     return users.filter(user => true)
})