

const INITIAL_STATE = {
  login: false,
  email: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      }
      default :
      return state;
  } 
}

const store = Redux.createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
})

store.dispatch(fazerLogin("fibiano@hotmail.com"))

console.log(store.getState());