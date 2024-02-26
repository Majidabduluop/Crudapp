import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [show, setshow] = useState(false);

  const handleshow = () => 
  {

    setshow(!show)
  }

  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const [LoginList] = useState(
    () => JSON.parse(localStorage.getItem("arrayKey1")) || []
  );

  const [err, setErr] = useState({});

  const handlechange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const add = () => {
    let filterlogin = LoginList.filter(
      (item) => item.name === login.name && item.password === login.password
    );

    if (filterlogin.length > 0) {
      localStorage.setItem("currentUser", JSON.stringify(filterlogin[0]));
      navigate("/home");
    } else if (filterlogin.length === 0) {
      const validation = {};

      validation.passerror = "Incorrect email or password";

      setErr(validation);

      return;
    }
  };

  return (
    <div>
      <h1 className="bg-[#a5b1c2] text-white pt-4 pb-4 text-center font-bold xs:p-2">
        Login
      </h1>

      <form onSubmit={add}>
        <div className="flex flex-col items-center mt-8">
          <input
            type="text"
            name="name"
            required
            placeholder="User Name"
            value={login.name}
            onChange={(e) => handlechange(e)}
            className="pl-14 pr-14 bg-gray-200 mt-4 pt-1 pb-1 rounded-xl xs:pl-6 xs:pr-6 lg:mt-12"
          />
          {err.passerror && (
            <label className="text-red-500 text-xs ">{err.passerror}</label>
          )}

          <div>
            {" "}
            <label className="absolute mt-9 ml-64" onClick={()=> handleshow()}>
              {" "}
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z" />
                <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
              </svg>{" "}
            </label>
            <input
              type={show ? "text" : "password"}
              required
              name="password"
              placeholder="Create a Password "
              value={login.password}
              onChange={(e) => handlechange(e)}
              className="pl-14 pr-14 bg-gray-200 mt-8 pt-1 pb-1 rounded-xl xs:pl-6 xs:pr-6"
            />
          </div>
          {err.passerror && (
            <label className="text-red-500 text-xs">{err.passerror}</label>
          )}

          <button
            type="submit"
            className="pl-10 pr-10 pb-1 pt-1 mt-10 text-white rounded-xl bg-[#a5b1c2]"
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
