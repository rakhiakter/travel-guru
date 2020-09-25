import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "../../../src/firebase.config";
import "./CreateAccount.css";
const CreateAccount = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleGoogleSignIn = () => {
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
        setLoggedInUser(signInUser);
        history.replace(from);
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
        user.success = true;
        setUser(user);
        setLoggedInUser(user);
        history.replace(from);
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

    if (e.target.id === "email") {
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
    console.log("123");
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
          console.log("136");
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          //   updateUserName(user.name);
          console.log("144");
        });
    }

    e.preventDefault();
  };

  return (
    <Container id="createForm">
      <Form>
        <h4>Create Account</h4>
        <Form.Group controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder="First Name"
            onBlur={handleBlur}
            required
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Control
            type="text"
            placeholder="Last Name"
            onBlur={handleBlur}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
            type="email"
            placeholder="Username or email"
            onBlur={handleBlur}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            onBlur={handleBlur}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onBlur={handleBlur}
            required
          />
        </Form.Group>

        <Button type="button" onClick={handleSubmit}>
          Create an account
        </Button>
      </Form>
      <p style={{ display: "flex" }}>
        Already have an account?{" "}
        <Link
          to="/login"
          style={{
            paddingLeft: "300px",
          }}
        >
          Login
        </Link>
      </p>
      <Button
        variant="primary"
        size="lg"
        type="submit"
        onClick={handleFbSignIn}
      >
        Login with Facebook
      </Button>
      <br />
      <Button
        variant="primary"
        size="lg"
        type="submit"
        onClick={handleGoogleSignIn}
      >
        Login with Google
      </Button>
    </Container>
  );
};

export default CreateAccount;
