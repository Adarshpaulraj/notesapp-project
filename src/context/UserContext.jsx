import React from 'react'
import { useState } from 'react';

export const UserDataContext=React.createContext(null)

function UserContext({children}) {
    let [text, setText] = useState([
     
      {
        title:"Wekly Task",
        paragraph:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
        dolorum excepturi corrupti culpa a, blanditiis nihil corporis
        magni eaque, provident beatae reprehenderit, Doloremque, dignissimos iure.`
      },
      {
        title:"Wekly Task",
        paragraph:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
        dolorum excepturi corrupti culpa a, blanditiis nihil corporis
        magni eaque, provident beatae reprehenderit, Doloremque, dignissimos iure.`
      }, 
      {
        title:"Wekly Task",
        paragraph:` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
        dolorum excepturi corrupti culpa a, blanditiis nihil corporis
        magni eaque, provident beatae reprehenderit, Doloremque, dignissimos iure.`
      },
      
      
     
      
      
      
    
    ]);
    
  return  <UserDataContext.Provider value={{text,setText}}>
         {children}
  </UserDataContext.Provider>
}

export default UserContext