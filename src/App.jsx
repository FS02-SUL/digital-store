import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { PrimeReactProvider } from 'primereact/api';
import Ways from "./routes";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../public/digital.css';

const App = () => {

  const [userInfo, setUserInfo] = useState({
    name: 'Chico',
    isLogged: false,
    level: 'admin'
  });
  

  return(
    <>
      <AuthContext.Provider value={{userInfo, setUserInfo}}>
        <PrimeReactProvider>
          <Ways />
        </PrimeReactProvider>
      </AuthContext.Provider>
    </>
  );
}

export default App;