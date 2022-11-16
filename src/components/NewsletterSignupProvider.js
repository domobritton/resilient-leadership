import { React, createContext, useState, useContext, useEffect } from 'react';

const Context = createContext(null);

export const useNewsletterSignupContext = () => {
  const ctx = useContext(Context);
  return ctx;
};

export const NewsletterSignupProvider = ({ children }) => {
  const [messageSuccess, setMessageSuccess] = useState(false);

  useEffect(() => {
    if (messageSuccess) {
      setTimeout(() => {
        setMessageSuccess(false);
      }, 3000);
    }
  }, [messageSuccess]);

  return (
    <Context.Provider value={{ messageSuccess, setMessageSuccess }}>
      {children}
    </Context.Provider>
  );
};

export default NewsletterSignupProvider;
