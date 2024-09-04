import { AUTO_LANGUAGE } from '../constants';
import { type State, type Action, Language, FromLanguage } from '../types.d';
import { useReducer } from "react"

//1 Create a initalState
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result:'',
  loading: false
}

// 2 Create a reducer
function reducer(state: State, action: Action){
  const {type} = action

  switch (type){

    case 'INTERCHANGE_LANGUAGES':
      if(state.fromLanguage == AUTO_LANGUAGE) return state
      return{
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
        
      }
    case 'SET_FROM_LANGUAGE':
      return{
        ...state,
        fromLanguage:action.payload
      }
    case 'SET_TO_LANGUAGE':
      return{
        ...state,
        toLanguage:action.payload
      }
    case 'SET_FROM_TEXT':
      return{
        ...state,
        loading:true,
        fromLanguage:action.payload,
        result:''
      }
    case 'SET_RESULT':
      return{
        ...state,
        loading:true,
        fromLanguage:action.payload
      }
    default:
      return state
  }

}

export function useStore(){
    // use the reducer
    const [{
      fromLanguage,
      toLanguage,
      fromText,
      result,
      loading
    }, dispatch] = useReducer(reducer, initialState)

    // cambio el contrato para que los componentes no esten atado al contrato
    const interchangeLanguages = () => {
      dispatch({type: 'INTERCHANGE_LANGUAGES'})
    }

    const setFromLanguage = (payload: FromLanguage) => {
      dispatch({type: 'SET_FROM_LANGUAGE', payload})
    }
    const setToLanguage = (payload: Language) => {
      dispatch({type: 'SET_TO_LANGUAGE', payload})
    }
    const setFromText = (payload: string) => {
      dispatch({type: 'SET_FROM_TEXT', payload})
    }
    const setResult = (payload: string) => {
      dispatch({type: 'SET_RESULT', payload})
    }
  
  
    return{
      fromLanguage,
      toLanguage,
      fromText,
      result,
      loading,
      interchangeLanguages,
      setFromLanguage,
      setToLanguage,
      setFromText,
      setResult
    }
}
