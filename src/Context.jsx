import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const myContext = createContext({});
axios.defaults.headers.common['User-Agent'] = 'PostmanRuntime/7.26.2';
const Context = ({ children }) => {
  const [userObj, setUserObj] = useState();


  useEffect(() => {
    axios
    .get('https://rocky-thicket-98577.herokuapp.com/auth/getuser/', { 
      withCredentials: true,
    })
    .then(res => {
      if (res) {
        console.log("RESPONSE")
        console.log(res)
        console.log(res.data)
        setUserObj(res.data)
      }
    })
  }, []);
  return <myContext.Provider value={userObj}>{children}</myContext.Provider>;
};

export default Context;
