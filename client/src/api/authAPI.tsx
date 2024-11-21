import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  const  response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
    credentials: 'include'
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return await response.json();
  // TODO: make a POST request to the login route
}



export { login };
