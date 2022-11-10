import { useState, useEffect } from "react";
import login from "../../app/assets/images/login.svg";
import cool from "../../app/assets/images/cool.svg";
import Google from "../../app/assets/images/google.png";
import "./loginModal.css";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmail, loginUser ,registerUser} from '../../redux/features/users/userActions';
import { SET_LOGIN, SET_NAME, SET_USER } from "../../redux/features/users/usersSlice";
import { userLogin } from '../../redux/features/users/usersSlice'
import Loader from "../LoadingError/Loading"
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const initialState = {
  firstName: "",
  lastName: "",
  newEmail: "",
  newPassword: "",
  password2: ""
};

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [roller, setRoller] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  function signUpRollerStyles() {
    setRoller(!roller);
  }
  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  //   try {
  //     // await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      if (data) {
        dispatch(SET_LOGIN(true));
        dispatch(SET_NAME(data.firstName));

        dispatch(SET_USER(data));
        setIsLoading(false);
        navigate("/dashboard");
      } else {
        setIsLoading(false);
        navigate("/");
      }

    } catch (error) {
      setIsLoading(false);
    }
  };

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle();

      if (auth.currentUser.displayName) {
        localStorage.setItem("user", JSON.stringify(auth));
        navigate("/dashboard");
      }

    } catch (error) {
      console.log(error.message);
    }
  };



  
  const [loading, setLoading] = useState(false);
  const [formData, setformData] = useState(initialState);

  const { firstName, lastName, newEmail, newPassword, password2} = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    

    if (!firstName || !lastName || !newEmail || !newPassword ) {
      console.log("all field");
      return toast.error("All fields are required");
    }
    if (newPassword.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (!validateEmail(newEmail)) {
      return toast.error("Please enter a valid email");
    }
    if (newPassword !== password2) {
      return toast.error("Passwords do not match");
    }
  
    const userData = {
      firstName,
      lastName,
      email: newEmail,
      password: newPassword
    };

    setLoading(true);
    try {
      const data = await registerUser(userData);
      if (data) {
        dispatch(SET_LOGIN(true));
        dispatch(SET_NAME(data.firstName));
        dispatch(SET_USER(data));
        setLoading(false);
        navigate("/dashboard");
      } else {
        setIsLoading(false);
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>

      <div
        className="row shadow-lg rounded vw-100 vh-100"
        id="loginModal">

        {roller ?
          <div
            className="position-absolute col text-center  d-flex flex-column justify-content-start align-items-top mt-3 pe-5 "
            id="signUpPositioning"
          >
            <div
              className=" pt-4  scroll-none me-5 mb-3  pe-4" style={{ width: "40%" }}
              id="right-cont"
            >
              <h1 className="text-dark bolder">Sign Up</h1>
              <form className="ms-5 ps-5 overflow-hidden" onSubmit={register}>
                <div className="form-group d-flex text-start ps-3">
                  <div>
                    <label htmlFor="signupFirsttname" className="text-dark">
                      First Name
                    </label>
                    <input
                      type="firstName"
                      className="form-control"
                      id="signupFirsttname"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                      name="firstName"
                      value={firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="ms-2 ">
                    <label htmlFor="signupLasttname" className="text-dark">
                      Last Name
                    </label>
                    <input
                      type="lastName"
                      className="form-control "
                      id="signupLasttname"
                      name="lastName"
                      aria-describedby="emailHelp"
                      placeholder="Last Name"
                      required value={lastName} onChange={handleInputChange} 
                    />
                  </div>

                </div>

                <div className="form-group  text-start ps-3 ">
                  <label htmlFor="exampleInputEmail1" className="text-dark">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="newEmail"
                    value={newEmail}
                    onChange={handleInputChange} 
                  />
                  <small id="emailHelp" className="form-text ">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div className="form-group text-start ps-3">
                  <label htmlFor="exampleInputPassword1" className="text-dark">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="newPassword"
                    value={newPassword}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Comfirm Password</label>
                  <input

                    type="password"
                    required
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                
                <p className="text-dark text-start ps-4 ">
                  {" "}
                  Alrady user?{" "}
                  <span
                    role="button"
                    onClick={signUpRollerStyles}
                    className="text-primary"
                  >
                    Login
                  </span>
                </p>

                <div>
                  <button
                    type="submit"
                    className="btn btn-primary text-white w-100 py-2 ms-3"
                  >
                    Sing Up
                  </button>
                </div>
              </form>
            </div>
          </div>
          :
          <div
            className={roller ? "d-none" : "col card  text-center d-flex flex-column justify-content-center align-items-end mb-5  w-100"}
            id="signupSide"
          >
            <div className={roller ? "d-none" : "pb-5 px-2 mt-2scroll-none ms-5"} id="right-cont">
              <h1 className="text-dark bolder ">Sign in</h1>

              <form className="needs-validation" onSubmit={handleSubmit}>
                <div className="form-group  text-start">
                  <label htmlFor="exampleInputEmail1" className="text-dark">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleChange}
                  />

                  <small id="emailHelp" className="form-text ">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group text-start">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="text-dark"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                  />

                </div>
                <p className="text-dark text-start ps-2 ">
                  New here?{" "}
                  <span
                    role="button"
                    className="text-primary"
                    onClick={signUpRollerStyles}
                  >
                    Sign Up
                  </span>
                </p>
                <div className=" form-group form-check text-start mt-3 mb-3 ">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    required
                  />
                  <label
                    className="form-check-label text-dark text-sm-white ps-2"
                    id="checkboxLabel"
                    htmlFor="exampleCheck1"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary text-white w-100 py-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <h5 className="text-dark ">Or</h5>
              <div className="google_singin bg-dark">
                <Button
                  className="btn btn-primary  text-white w-100 py-2 px-5"
                  // type="submit"
                  onClick={handleGoogleSignIn}
                >
                  <img alt="" src={Google} className="pe-2 mb-1" /> Continue
                  with Google{" "}
                </Button>
              </div>
            </div>
          </div>
        }







        <div className="col d-none d-xl-block">
          <div
            className={
              roller
                ? "rollerTransition roller d-flex justify-content-end "
                : "roller d-flex"
            }
            id="LoginRoller"
          ></div>

          {roller ? (
            <div
              className=" d-block  position-absolute text-dark"
              id="rollerRight_text"
            >
              <h1 className=" text-white text-center">
                Get start you future dream with us!
              </h1>
              <h5 className="pt-4 text-center text-white">
                Hey, is this your first time to to visit our website ? If so you
                can sign up here. else you can sign in on the right side.
              </h5>

              <img alt="" src={login} />
            </div>
          ) : (
            <div
              className=" d-block position-absolute "
              id="roller_text"
            >
              <h1 className="text-light">Glad to see you!</h1>
              <h5 className="pt-4 text-center text-light">
                Hey, is this your first time to to visit our website ? If so you
                can sign up here. else you can sign in on the right side.
              </h5>

              <img alt="" src={cool} />
            </div>
          )}



          <div className="signupImage">
            <img alt="" className="cool mt-5 pt-5 ms-4" src={cool} />
          </div>
        </div>



      </div>
    </>
  );
};

export default LoginPage;







