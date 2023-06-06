import { createContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [accountDetails, setAccountDetails] = useState(null);

  return (
    <AuthContext.Provider value={{ authorized, setAuthorized, accountDetails, setAccountDetails }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
