import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({});

  return (
    <AuthContext.Provider value={{ email, setEmail, formData, setFormData }}>
      {children}
    </AuthContext.Provider>
  );
};