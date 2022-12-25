import { useState } from 'react';
import {createContext} from 'react';
export const Context=createContext();
function getData(){

}
const StateProvider=({children})=>{
    const [searchText,setSearchText]=useState("movie");
    const [content,setContent]=useState([]);

    return (
        <Context.Provider value={{searchText,setSearchText,content,setContent}}>
         {children}
        </Context.Provider>
    )
}
export default StateProvider;