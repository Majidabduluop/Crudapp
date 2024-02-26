import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




function Signup() {
  const navigate = useNavigate();

  const [show, setshow] = useState(false);

  const handleshow = () => {
    setshow(!show);
  };

  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [pass, setPass] = useState({
    passwordcon: "",
  });

  const [List, setList] = useState(
    () => JSON.parse(localStorage.getItem("arrayKey1")) || []
  );

  const [error, setError] = useState({});

  const [Added, setAdded] = useState(false);

  const handlechange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });

    setError("");
  };

  const passcheck = (e) => {
    setPass({ [e.target.name]: e.target.value });

    setError("");
  };

  const add = (e) => {
    e.preventDefault();

    const validationerror = {};

    if (signup.name.trim() === "") {
      validationerror.username = "Name is required";
      setError(validationerror);
      return;
    }

    if (signup.name.length < 4) {
      validationerror.username = " Wrong Name ";
      setError(validationerror);
      return;
    }

    if (
      /[!@#$%^&*(),.?":{}|<>]/g.test(signup.name) ||
      !/^[A-Z]/.test(signup.name) ||
      /\d+/g.test(signup.name)
    ) {
      validationerror.username = "Name is not in valid form";
      setError(validationerror);
      return;
    }

    if (signup.email.trim() === "") {
      validationerror.useremail = "Email is required";
      setError(validationerror);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(signup.email)) {
      validationerror.useremail = "Email is'nt Valid";
      setError(validationerror);
      return;
    }

    let filterEmail = List.filter((item) => item.email == signup.email);

    if (filterEmail.length > 0) {
      validationerror.useremail = "Email is already in use";

      setError(validationerror);
      return;
    }

    if (signup.password.trim() === "") {
      validationerror.userpassword = "Password is required";
      setError(validationerror);
      return;
    }

    const passreg = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!passreg.test(signup.password)) {
      validationerror.userpassword = "weak password";
      setError(validationerror);
      return;
    }

    if (pass.passwordcon.length === 0) {
      validationerror.confirmpass = "confirm password is required";
      setError(validationerror);
      return;
    }

    if (pass.passwordcon !== signup.password) {
      validationerror.confirmpass = "Your password is not matched";
      setError(validationerror);
      return;
    }

    setList([...List, { ...signup, id: Math.random() }]);

    setAdded(true);

    setSignup({
      name: "",
      email: "",
      password: "",
      passwordcon: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("arrayKey1", JSON.stringify(List));

    if (Added) {
      navigate("/login");
    }
  }, [List]);

  const Back = () =>
  {
    navigate("/")
  }

  return (
    <div>
      <h1 className="bg-[#a5b1c2] text-white  md:p-6 pt-4 pb-4 text-center  md:text-sm font-bold xs:pt-2 xs:pb-2 xs:pl-2 xs:pr-2">
        Signup Form
      </h1>
     
      <button
        onClick={() => Back()}
        className=" text-white bg-[#a5b1c2] rounded-md pl-4 pr-4 pt-2 pb-2 mt-4 ml-4"
      >
        Back
      </button>

      <form onSubmit={add}>
        <div className="flex flex-col  items-center mt-8 md:mt-24 md:pl-20 md:pr-20 md:pt-2 md:pb-2 lg:mt-16 ">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            value={signup.name}
            onChange={(e) => handlechange(e)}
            className=" xs:pt-1 xs:pb-1 xs:pl-2 xs:pr-2 pl-14 pr-14 bg-gray-200  pt-1 pb-1 rounded-xl md:pl-20 md:pr-20 md:pt-2 md:pb-2 lg:mt-1 lg:pt-1 lg:pb-1 lg:pl-10 lg:pr-10"
          />
          {error.username && (
            <label className="text-red-500 text-xs">{error.username}</label>
          )}

          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={signup.email}
            onChange={(e) => handlechange(e)}
            className="xs:pt-1 xs:pb-1 xs:pl-2 xs:pr-2 pl-14 pr-14 bg-gray-200 mt-8 pt-1 pb-1 rounded-xl md:mt-10 md:pl-20 md:pr-20 md:pt-2 md:pb-2 lg:pt-1 lg:pb-1 lg:pl-10 lg:pr-10"
          />
          {error.useremail && (
            <label className="text-red-500 text-xs">{error.useremail}</label>
          )}

          <div className="">
            <label
              className="absolute mt-11 ml-56"
              onClick={() => handleshow()}
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Create a Password "
              value={signup.password}
              onChange={(e) => handlechange(e)}
              className=" xs:pt-1 xs:pb-1 xs:pl-2 xs:pr-2 pl-14 pr-14 bg-gray-200 mt-8 pt-1 pb-1 rounded-xl md:mt-10 md:pl-20 md:pr-20 md:pt-2 md:pb-2 lg:pt-1 lg:pb-1 lg:pl-10 lg:pr-10"
            />{" "}
          </div>

          {error.userpassword && (
            <label className="text-red-500 text-xs">{error.userpassword}</label>
          )}

          <div>
            <label
              className="absolute mt-11 ml-56"
              onClick={() => handleshow()}
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </label>
            <input
              type="password"
              name="passwordcon"
              placeholder="Confirm a Password "
              value={pass.passwordcon}
              onChange={(e) => passcheck(e)}
              className="xs:pt-1 xs:pb-1 xs:pl-2 xs:pr-2 pl-14 pr-14 bg-gray-200 mt-8 pt-1 pb-1 rounded-xl md:mt-10 md:pl-20 md:pr-20 md:pt-2 md:pb-2 lg:pt-1 lg:pb-1 lg:pl-10 lg:pr-10 "
            />
          </div>
          {error.confirmpass && (
            <label className="text-red-500">{error.confirmpass}</label>
          )}

          <button
            type="submit"
            className="lg:pt-2 lg:pb-2 lg:pl-14 lg:pr-14 md:mt-12 md:pt-4 md:pb-4 md:pl-12 md:pr-12 pl-10 pr-10 pb-1 pt-1 mt-10 text-white rounded-xl bg-[#a5b1c2]"
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
