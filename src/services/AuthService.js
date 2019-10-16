import axios from "./RequestObject";

const USER = "api/user";
const AUTH = "api/auth";

class AuthService {

  /**
   * Adds a new user to the database
   * @param {*} user The user object which should be added
   */
  static registerUser(user) {
    return axios.post(USER, user);
  }

  /**
   * Authenticates a user and returns the response
   * @param {*} user credentials of the user logging in
   */
  static loginUser(user) {
    return axios
      .get(AUTH, {
        params: user
      })
      .then(response => {
        return {
          ...response.data,
          name: user.username,
          auth: response.headers.authorization
        };
      })
      .catch(err => err);
  }
}

export default AuthService;
