import React from "react";
 import { BsTrash3 } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import { useState } from 'react';
import { BsFileEarmarkText } from "react-icons/bs";
import Button from 'react-bootstrap/Button'  

  function Notes() {
  let {text,setText}=useContext(UserDataContext)

  let handleDelete=(index)=>{
    let newArray=[...text]
    newArray.splice(index,1)
    setText(newArray)
  }
  let [title,setTitle]=useState("")
  let [paragraph,setParagraph]=useState("")
  let handleSubmit=()=>{
      let newArray=[...text]
  newArray.push({
      title,
      paragraph
  })
   setText(newArray)
   setTitle("")
   setParagraph("")

  }
  let handleEdit=(index)=>{
     setTitle(text[index].title)
     setParagraph(text[index].paragraph)
  }
  return (
    <>
      <div className="container-fluid">
      <div className="shadow-lg  bg-body  shadow box">
          <div className="title">
            <h3>Add a Notes</h3>
            <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
          </div>
          <textarea
            name="Text"
            id="textnotes"
            cols="105"
            rows="4"
            placeholder="Take a Notes. . . "  value={paragraph} onChange={(e)=>setParagraph(e.target.value)}
          />
            <Button variant='outline-dark m-1 mb-3 '  size="sm" onClick={handleSubmit}>submit</Button>
        </div>
        <div>
          <h3 className="fs-4 p-2 mb-0 mt-4">
            <BsFileEarmarkText size={25} />
            &nbsp; My Notes
          </h3>
         </div>
         <div className="  overflow">
        {
          text.map((e,i)=>{
             return    <div className="shadow-lg  bg-body shadow box2 m-2 p-2" key={i}>
          
            <div className="trash pt-2">
              <h4 className="fs-5">{e.title} </h4>
              <span>
                <MdOutlineEdit onClick={()=>handleEdit(i)}/>
                &nbsp;
                <BsTrash3 size={15} onClick={()=>handleDelete(i)}/>
              </span>
            </div>
            <div>
              <p>
                {e.paragraph}
               </p>
            </div>
          </div>
          })
        }
        
        </div>
      </div>
    </>
  );
}

export default Notes;
