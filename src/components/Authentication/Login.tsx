import { signInWithEmailAndPassword, browserLocalPersistence, setPersistence } from "firebase/auth"
import { auth } from "../../firebase-config";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useSignInWithEmail } from "../../hooks";



const Login = () => {
  const { state, dispatch} = useContext(AuthContext)
  
  const { signInWithEmail } = useSignInWithEmail()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmail(state.user.email, state.user.password)

      }
  return (
    <>
      <div className="mt-10 font-bold flex w-[520px]">
        <h2 className="w-2/4 py-2 border-b-8">REGISTER</h2>
        <h2 className="w-2/4 py-2 text-right border-b-8 border-b-blue-600">
          LOG IN
        </h2>
      </div>
      <div className="absolute top-[20%]">
        <h2 className="text-3xl font-semibold text-center">Welcome back</h2>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-lg ">
            Email address
          </label>
          <br />
          <input
            className="w-[520px] py-[10px] px-[14px] border border-cyan-100 mt-2 rounded-md shadow-sm shadow-cyan-100"
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@mail.com"
            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
          />
          <br />
          <br />
          <label htmlFor="password" className="text-lg ">
            Password
          </label>
          <br />

          <input
            className="w-[520px] py-[10px] px-[14px] border border-cyan-100 mt-2 rounded-md shadow-sm shadow-cyan-100"
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
          />
          <br />
          <br />
          <button className="w-[520px] text-center bg-blue-700 text-white font-bold py-[10px] px-[14px] rounded-md">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};


export default Login;
