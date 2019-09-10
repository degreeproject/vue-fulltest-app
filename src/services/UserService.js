import axios from 'axios';

const USER = 'api/user';

class UserService {
  /**
   * Gets necessary information for application receipt
   */
  static getUsers(){
    return axios.get(USER)
  }

}

export default UserService;