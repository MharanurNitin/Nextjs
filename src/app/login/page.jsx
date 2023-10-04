import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div>Login</div>
      <br />
      <Link href={"/login/loginTeacher"}> Teacher Login</Link>
      <br />
      <Link href={"/login/loginStudent"}> Student Login</Link>
    </>
  );
};

export default Login;
