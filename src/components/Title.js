import React from "react";


let Title = ()=>{
    
  const mystyle ={
    textAlign: "center",
    color: "black",
    fontSize: "4.5rem",
    lineHeight: "3.2",
    padding: "0%"
  }

  const mystyle2 ={
    textAlign: "center",
    color: "black",
    fontSize: "2.5rem",
    lineHeight: "1",
    padding: "0%"
  }

    return(
<div> 
<h1 style={mystyle}>The Generics</h1>
<hr />
<h1 style={mystyle2}>Music</h1>
</div>

    )
}

export default Title;