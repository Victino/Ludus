export class UserService {
  
  UserLogin(user) {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((result) => {
        if (result.status === 200) {
          console.log("Success");
          window.location.href = "/";
        } else {
          // direct to home page
          alert("Incorrect username or password");
          console.log("Failure");
        }
      })
      .catch((error) => console.error(error));
  }
}
