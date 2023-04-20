// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    return(
        <div>
            <button onFocus = {(e) =>{
                if(focus){
                    console.log('Good!')
                }else{
                    console.log('Hey! Eyes on me!')
                }
            }}>Eyes on me</button>
        </div>

    )
}
export default EyesOnMe;