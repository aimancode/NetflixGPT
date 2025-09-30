import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { BG_URL } from "../utils/constants";



const Login = () => {
  // useNavigate is used to navigate
  const Navigate = useNavigate();

  // state to manage whether the form is for sign in or sign up
  const [isSignInForm, setIsSignInForm] = useState(true);

  // state to manage error messages
  const [errorMessage, setErrorMessage] = useState(null);

  // useRef hooks to get input values
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  // function to handle button click (sign in or sign up)
  const handleButtonClick = () => {
    // validate the form data and set error message if any
    const message = checkValidData(
      email.current.value,
      password.current.value,
      fullname.current?.value
    );
    setErrorMessage(message);
    if (message) return; // proceed with form submission logic (e.g., API call) if no error
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
          })
            .then(() => {
              // Profile updated!
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    } else {
      //sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          Navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="netfilx_logo"
        />
      </div>
      {/* is used prevent the submission on form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute w-4/12 mt-24 mx-auto left-0 right-0 z-10 flex flex-col text-white bg-opacity-65 rounded-md"
      >
        <h1 className="font-bold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* !isSignInform checks if the user is not in signIn then displays Name Input  */}
        {/* ref is used to get the reference of the input box */}

        {!isSignInForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-md border bg-opacity-20"
          />
        )}

        {/* ref is used in here to provide the reference  */}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-md border bg-opacity-20"
        />

        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-800 rounded-md border bg-opacity-20"
        />

        <p className="text-red-500 text-bold p-2   ">{errorMessage}</p>

        <button
          className="p-3 my-4 w-full text-white bg-[#E50914]  rounded-md text-bold "
          onClick={handleButtonClick}
        >
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix Sign In"
            : "Already Registered? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default Login;
