import React, { useState } from 'react';
import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

// const userAuthData1 = await client.users.authViaEmail('test@example.com', '123456');


function LoginPage(props) {

  const [userDetails, setuserDetails] = useState({
      email: "",
      password: ""
    });
  function handleChange(event) {
    const { value, name } = event.target;

    setuserDetails(prevValue => {
      if (name === "email") {
        return {
          email: value,
          passowrd: prevValue.password
        };
      }
      if (name === "password") {
        return {
          email: prevValue.email,
          password: value
        };
      }
    })
  }
  
  return  <div>
    <h2>Login</h2>
     <form>
      <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          defaultValue={userDetails.email}
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="Password"
          type="password"
          defaultValue={userDetails.password}
        />
  <button>LOGIN</button>
   </form>
    </div>
}

export default LoginPage;
