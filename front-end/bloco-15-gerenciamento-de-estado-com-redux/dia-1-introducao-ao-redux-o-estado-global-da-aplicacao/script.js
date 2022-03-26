const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const NEXT_COLOR = 'NEXT_COLOR';
const RANDOM_COLOR = 'NEXT_COLOR';

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type){
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1
      }
      case NEXT_COLOR:
        return {
          ...state,
          index: state.index === state.colors.length - 1 ? 0 : state.index + 1
        }
        case 'RANDOM_COLOR':
          return {
            ...state,
            colors: [...state.colors, criaColor()],
            index: state.colors.length,
          };

      default :
      return state;
  } 
}


const store = Redux.createStore(reducer, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const nextBtn= document.getElementById('next');
const previousBtn = document.getElementById('previous');
const randomColor = document.getElementById('random');

nextBtn.addEventListener('click', ()=> {
  store.dispatch({type: 'NEXT_COLOR'});
})

previousBtn.addEventListener('click', ()=> {
  store.dispatch({type: 'PREVIOUS_COLOR'});  
})

randomColor.addEventListener('click', ()=> {
  store.dispatch({type: 'RANDOM_COLOR'});  
})

function criaColor () {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
 let cor = '#';
 
 const aleatorio = () => Math.floor(Math.random() * oneChar.length)

 for (let index = 0; index < 6; index+=1) {
  cor+= oneChar[aleatorio()];   
 }
 return cor;
}

store.subscribe(()=> {
 const randomColor = criaColor();
 console.log(randomColor);
 const { colors, index } = store.getState();
 document.getElementById('value').innerHTML = colors[index];
 const container = document.getElementById('container');
 container.style.backgroundColor = colors[index];

 console.log(store.getState().colors);
})

