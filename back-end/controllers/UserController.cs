using back_end.Models.RequestModels;
using Microsoft.AspNetCore.Mvc;

namespace back_end.UserController
{
    public class UserController
    {
        private readonly UserRepository _userRepository;
        public UserController(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            // Access the username and password from the loginData object

            // TODO: Authenticate the user and return an appropriate response
            if (user.Username == "Victino")
            {
                return new StatusCodeResult(200);
            }
            return new StatusCodeResult(401);
        }

        // [HttpGet("register")]
        // public IActionResult Register([FromBody] User user)
        // {
        //     var userFromDb = _userRepository.NewUser(user.Username, user.Password);
        //     if (userFromDb == null)
        //     {
        //         return Unauthorized();
        //     }
        //     return Ok(userFromDb);
        // }

        // [HttpGet("user/{id}")]
        // public IActionResult GetUserById(int id)
        // {
        //     var userFromDb = _userRepository.GetUserById(id);
        //     if (userFromDb == null)
        //     {
        //         return Unauthorized();
        //     }
        //     return Ok(userFromDb);
        // }
    }
}