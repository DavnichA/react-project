import { usersAPI } from '../API/api';
import { objectInArray } from '../utils/validators/objects-helpers';

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
        users: objectInArray(state.users, action.userId, 'id', {followed: true})
      };

    case UNFOLLOW:
      return {
        ...state,
        users: objectInArray(state.users, action.userId, 'id', {followed: false})
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
// получить пользователей
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setIsFetching(true)); //preloader on

  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setIsFetching(false)); ////preloader off
  dispatch(setUsers(data.items)); //данные которые вернулись с сервера: а именно пользователи
  dispatch(setTotalUsersCount(data.totalCount));
}

// изминение страницы пользователей
export const pageChanged = (pageNumber, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(pageNumber));
  dispatch(setIsFetching(true));

  let data = await usersAPI.getUsers(pageNumber, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(data.items));//данные которые вернулись с сервера: а именно пользователи
}

//подписаться и отписаться 

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowing(true, userId));

  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowing(false, userId));
}

export const followProgress = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.followUsers.bind(usersAPI);
  followUnfollow(dispatch, userId, apiMethod, follow);
}

export const unfollowProgress = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.unfollowUsers.bind(usersAPI);
  followUnfollow(dispatch, userId, apiMethod, unfollow);
}

export default usersReducer;

// ...state это глубокое копирование обьекта