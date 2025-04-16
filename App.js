import React from 'react'
import'./Style.css'

function App() {
    return(
        <div><h1>hii welcome to fight club:</h1>
       
               <div class="channu"> 
                <label htlmfor="name">Name:</label><br></br>
                <input type="text"/><br></br>
                <label htlmfor="gmail">Gmail:</label><br></br>
                <input type="text"/><br></br>
                <label htlmfor="password"> Pass   :</label><br></br>
                <input type="text"/><br></br>
                <label htlmfor="otp">OTP:</label><br></br>
                <input type="text"/><br></br><br></br>
                   <center>
           <button>Signup</button>
                   <br></br>
                   <br></br>
                   <button>Forget password</button></center>
                
            </div>
        </div>
        
    )
}
export default App