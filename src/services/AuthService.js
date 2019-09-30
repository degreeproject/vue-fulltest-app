import axios from 'axios';

const USER = 'api/user';

class AuthService {
  /**
   * Gets necessary information for application receipt
   */
  static registerUser(user){
    return axios.post(USER, user)
  }
  static loginUser(user) {
    return axios.get(USER, {
      params: user
    // }).then(response => {
    //   return {
    //     ...response.data,
    //     auth: response.headers.authorization
    //   }
    })
    // .catch(err => err);
  }

}

export default AuthService;