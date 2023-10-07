import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Ways from "./routes";

const App = () => {

  const [userInfo, setUserInfo] = useState({
    name: 'Chico',
    isLogged: true
  });
  

  return(
    <>
      <AuthContext.Provider value={{userInfo, setUserInfo}}>
        <Ways />
      </AuthContext.Provider>
    </>
  );
}

export default App;