import { usersAPI } from '../API/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

// state по умолчанию
let initialState = {
  users: [],
  pageSize: 10, // количество пользователей на одной странице
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false, // preloader
  followingInProgress: []
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        })
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
        // для дисактивации одной кнопки подписки при запросе, а не всех
      }

    default:
      return state;
  }
}

// action creators

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

//thunk 

export const getUsers = (currentPage, pageSize) => {

  return (dispatch) => {
    dispatch(setIsFetching(true)); //preloader on
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setIsFetching(false)); ////preloader off
      dispatch(setUsers(data.items)); //данные которые вернулись с сервера: а именно пользователи
      dispatch(setTotalUsersCount(data.totalCount));
    });
  }
}

export const pageChanged = (pageNumber, pageSize) => {

  return (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(setIsFetching(true));
    usersAPI.getUsers(pageNumber, pageSize).then(data => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));//данные которые вернулись с сервера: а именно пользователи
    });
  }
}

export const followProgress = (userId) => {

  return (dispatch) => {
    dispatch(toggleFollowing(true, userId));
    usersAPI.followUsers(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(toggleFollowing(false, userId));
    });
  }
}

export const unfollowProgress = (userId) => {

  return (dispatch) => {
    dispatch(toggleFollowing(true, userId));
    usersAPI.unfollowUsers(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId));
      }
      dispatch(toggleFollowing(false, userId));
    });
  }
}

export default usersReducer;

// ...state это глубокое копирование обьекта