import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextAPI = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = () => {

  }

  const logout = () => {

  }

  return(
    <AuthContext.Provider value={{ login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}
