import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  const  response = await fetch('/api/auth/login')
  // TODO: make a POST request to the login route
}



export { login };
