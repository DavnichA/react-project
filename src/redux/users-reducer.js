const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

// state по умолчанию
let initialState = {
  users: [
    /* {
       id: 1, fullName: 'Oleg Lyashka', photo: 'https://i.lb.ua/047/48/5d9efcc739d04.jpeg',
       followed: false, status: 'Skotunyaki', location: { city: 'Kiev', country: 'Ukraine' }
     },
     {
       id: 2, fullName: 'Michał Elwiro Andriolli', photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Pan_Tadeusz_-_Ksiega_6_2.JPG',
       followed: false, status: 'Painter', location: { city: 'Vilnius', country: 'Russian Empire' }
     },
     {
       id: 3, fullName: 'Inna Lapteva', photo: 'https://i.sozcu.com.tr/wp-content/uploads/2017/12/inna-4.jpg',
       followed: true, status: '... hop hey', location: { city: 'Odessa', country: 'Ukraine' }
     },
     {
       id: 4, fullName: 'Sveta Kopchik', photo: 'https://yaustal.com/uploads/posts/2019-01/1546964062_sveta-biljalova-na-foto-iz-instagram-6.jpg',
       followed: true, status: 'Singer', location: { city: 'Babruysk', country: 'Belarus' }
     }*/
  ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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

    default:
      return state;
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setcurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;

// ...state это глубокое копирование обьекта