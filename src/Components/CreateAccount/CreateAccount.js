import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "../../../src/firebase.config";
// if (firebase.app.length === 0) {
firebase.initializeApp(firebaseConfig);
// }

const CreateAccount = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signInUser);
        console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(signedOutUser);
      })
      .catch((err) => {
        // An error happened.
      });
  };
  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  const handleBlur = (e) => {
    let isFieldValid = true;

    if (e.target.id === "formFirstName") {
      isFieldValid = e.target.value.trim().length > 0;
    }

    if (e.target.id === "formLastName") {
      isFieldValid = e.target.value.trim().length > 0;
    }

    if (e.target.id === "formBasicEmail") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.id === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.id] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    // if (user.email && user.password) {
    //   firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(user.email, user.password)
    //     .then((res) => {
    //       const newUserInfo = { ...user };
    //       newUserInfo.error = "";
    //       alert("user created");
    //     })
    //     .catch((error) => {
    //       const newUserInfo = { ...user };
    //       newUserInfo.error = error.message;
    //       setUser(newUserInfo);
    //     });
    // }

    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          console.log(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          //   updateUserName(user.name);
        });
    }

    e.preventDefault();
  };

  return (
    <Container>
      <Form id="form" onClick={handleSubmit}>
        <h4>Create Account</h4>
        <Form.Group controlId="formFirstName">
          <Form.Control
            type="email"
            placeholder="First Name"
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Control
            type="email"
            placeholder="Last Name"
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Username or email"
            onBlur={handleBlur}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            onBlur={handleBlur}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onBlur={handleBlur}
          />
        </Form.Group>

        <Button variant="warning" size="lg" type="submit">
          Create an account
        </Button>
        <p>
          Already have an account? <a href="#">Login</a>
        </p>
      </Form>
      <Button variant="primary" size="lg" type="submit">
        Login with Facebook
      </Button>
      <br />
      <Button variant="primary" size="lg" type="submit">
        Login with Google
      </Button>
    </Container>
  );
};

export default CreateAccount;
