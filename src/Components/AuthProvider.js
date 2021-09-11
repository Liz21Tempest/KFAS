import AuthContext from "../AuthContext"
import { useEffect, useState } from "react"
import {auth} from "./firebase"
export default function AuthProvider({children}){
  const [user, setUser]= useState()
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((fbuser)=> setUser(fbuser))
    return unsub
  }, [])
  return(
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}

{/* <div className="App">
    {this.state.isSignedIn ? (
        <span>
          <div>Signed In!</div>

            

           <h1>Welcome {firebase.auth().currentUser.displayName}</h1> 

           <img alt="profile picture" src={firebase.auth().currentUser.photoURL} /> 

         </span> ) : ( 

         <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} /> 
     )} 
</div> */}
