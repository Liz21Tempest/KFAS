import "./toppage.css";
import React, { useState, useContext } from "react";
import AuthContext from "../AuthContext";
import { auth } from "./firebase";
import firebase from "firebase/app";
import Greetings from "./Greetings";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import SearchbarS from "./SearchbarS";
import Searhcbar from "./Searchbar";
function Toppage({location = {pathname : "/"}}) {
  const user = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const onClick = () => setShowMenu(!showMenu);

  const Menudetails = () => (
    <div>
      <div className="menubackground"></div>
      <div className="menuuser">{user?.displayName}</div>
      <div>
        <button onClick={() => firebase.auth().signOut()} className="log">
          Log out
        </button>
      </div>
    </div>
  );

  function handleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    const user = firebase.auth().currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    }
  }
  return (
    <div>
      <div className="topbar">
        <div className="usergrid">
          <div>
            <Link to="/">
              <div className="logostyle">
                <img id="imageid" src="/logo.png" />
              </div>
            </Link>
            <button className="menubstyle" onClick={onClick}>
              <div className="userpfp">
                <img src={user?.photoURL}></img>
              </div>
            </button>
          </div>
          <div className="searchstyle">
            {location.pathname != "/" && <SearchbarS></SearchbarS>}
          </div>
          <div>
            <Link to="/settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="settings"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </Link>
            {showMenu ? <Menudetails /> : null}
          </div>
        </div>
        <div className="signin">
          {!user ? (
            <button onClick={handleLogin} className="signinstyle">
              Sign In
            </button>
          ) : (
            <div className="progressbar">
              {/* <div className="progressbarstyle"></div>
              <div className="detailslvl">lvl 1 </div>
              <div className="detailsmonth">1st month </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Toppage;
