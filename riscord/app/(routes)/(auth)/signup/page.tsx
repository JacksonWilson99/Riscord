import "./Signup.css";
import { useState, useEffect } from "react";
import { db } from "@/lib/db";
import { Profile } from "@prisma/client";
import Login from "../login/page";

// interface UserData {
//   fullname: string;
//   email: string;
//   username: string;
//   password: string;
// }

export default function Signup(): JSX.Element {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailErrorText, setEmailErrorText] = useState<string>("");
  const [usernameErrorText, setUsernameErrorText] = useState<string>("");

  const [fullnameError, setFullnameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    return !!String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const signupUser = async (): Promise<void> => {
    setFullnameError(false);
    setEmailError(false);
    setUsernameError(false);
    setPasswordError(false);

    let emptyFields = false;

    if (fullname === "" || email === "" || username === "" || password === "") {
      if (fullname === "") setFullnameError(true);
      if (email === "") {
        setEmailError(true);
        setEmailErrorText("* please enter your email");
      } else {
        if (!validateEmail(email)) {
          setEmailError(true);
          setEmailErrorText("* please enter a valid email");
        }
      }
      if (username === "") setUsernameError(true);
      setUsernameErrorText("* please enter your username");
      if (password === "") setPasswordError(true);
      emptyFields = true;
    }

    try {
      const existingUser = await db.profile.findFirst({
        where: {
          OR: [{ email: email }, { name: username }],
        },
      });

      if (existingUser) {
        // Handle case where email or username already exists
        Login();
        return;
      }

      // Create new profile in the database
      const newUser = await db.profile.create({
        data: {
          name: fullname,
          email: email,
          // Add other fields as necessary
          userId: "sampleUserId", // Provide a userId
          imageURL: "sampleImageURL", // Provide an imageURL
        },
      });

      // Clear form fields
      setFullname("");
      setEmail("");
      setUsername("");
      setPassword("");

      // Redirect to login page
      window.location.href = "/login";
    } catch (error) {
      console.error("Error signing up user: ", error);
    }
  };

  useEffect(() => {
    const passwordCheckbox = document.querySelector(
      "#signup-form-password-checkbox"
    ) as HTMLInputElement;
    passwordCheckbox.addEventListener("change", function () {
      const passwordInput = document.querySelector(
        "#signup-form-password"
      ) as HTMLInputElement;
      if (passwordCheckbox.checked) {
        passwordInput.type = "text";
      } else {
        passwordInput.type = "password";
      }
    });
  }, []);

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-title">
          <h1>welcome to riscord</h1>
          <h3>let's get you started!</h3>
        </div>
        <div className="signup-form">
          <div className="signup-form-content">
            <div className="signup-form-field">
              <label htmlFor="signup-form-name">enter your full name</label>
              <p
                id="signup-form-fullname-error"
                style={{
                  visibility: fullnameError ? "visible" : "hidden",
                  display: fullnameError ? "block" : "none",
                }}
              >
                * please enter your name
              </p>
              <input
                type="text"
                id="signup-form-name"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="signup-form-field">
              <label htmlFor="signup-form-email">enter your email</label>
              <p
                id="signup-form-email-error"
                style={{
                  visibility: emailError ? "visible" : "hidden",
                  display: emailError ? "block" : "none",
                }}
              >
                {emailErrorText}
              </p>
              <input
                type="text"
                id="signup-form-email"
                onChange={(e) => {
                  setEmail(e.target.value.toLowerCase());
                }}
              />
            </div>
            <div className="signup-form-field">
              <label htmlFor="signup-form-username">choose a username</label>
              <p
                id="signup-form-username-error"
                style={{
                  visibility: usernameError ? "visible" : "hidden",
                  display: usernameError ? "block" : "none",
                }}
              >
                {usernameErrorText}
              </p>
              <input
                type="text"
                id="signup-form-username"
                onChange={(e) => {
                  setUsername(e.target.value.toLowerCase());
                }}
              />
            </div>
            <div className="signup-form-field">
              <label htmlFor="signup-form-password">enter your password</label>
              <p
                id="signup-form-password-error"
                style={{
                  visibility: passwordError ? "visible" : "hidden",
                  display: passwordError ? "block" : "none",
                }}
              >
                * please enter a password
              </p>
              <input
                type="password"
                id="signup-form-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="signup-form-password-checkbox">
                <input type="checkbox" id="signup-form-password-checkbox" />
                <label htmlFor="signup-form-password-checkbox">
                  show password
                </label>
              </div>
            </div>
            <div
              className="signup-form-field"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <button type="submit" onClick={signupUser}>
                signup
              </button>
            </div>
            <div className="login-page-link">
              <a href="/login">already have an account? click to login!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
