import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const myContext = createContext({});
axios.defaults.headers.common['User-Agent'] = 'PostmanRuntime/7.26.2';
const Context = ({ children }) => {
  const [userObj, setUserObj] = useState();

  const getUser = async () => {

    axios
      .get('/api/auth/getuser/', { 
        withCredentials: true,

      })
      .then(res => {
        if (res) {
          console.log(res)
          return res.data
        }
      }).catch((response) => console.log(response)); 
  }
  useEffect(() => {
    
      const findUser = async () => {
        const data = await getUser()
        console.log(data)
        setUserObj(data)
      }
      findUser()
  }, []);
  return <myContext.Provider value={userObj}>{children}</myContext.Provider>;
};

export default Context;
