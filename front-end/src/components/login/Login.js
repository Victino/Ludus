import "./Login.css";
import {User} from "../../models/User.js";
import {UserService} from "../../services/UserService.js";



const user = new User();
const userService = new UserService();

export default function Login() {
  return <>{LoginContainer()}</>;
}

function LoginContainer() {
  return (
    <>
      <div className="loginContainer">
        <div className="loginForm">
          <div className="loginTitle">Login</div>
          <form className="place-items-center" onSubmit={handleSubmit}>
            <input
              className="userName"
              name="username"
              placeholder="Username"
            ></input>
            <input
              className="passWord"
              name="password"
              placeholder="Password"
              type="password"
            ></input>
            <div className="optionsContainer">
              <button className="signUpButton">Sign Up</button>
              <button className="loginButton">Log In</button>
            <button
              className="Confirm bg-Indigo text-BlueGreen px-4 py-2 rounded-md hover:bg-Indigo active:bg-OxfordBlue active:cursor-pointer"
              type="submit"
            >
              Continue
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  let user = new User();
  user.username = formData.get('username');
  user.password = formData.get('password');
console.log(user);
  userService.UserLogin(user);
}
