import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Base from './Components/Layout/Base';
import Home from "./Pages/Home"
import { Web3ReactProvider } from '@web3-react/core'
// import { Web3Provider } from '@ethersproject/providers'
// import { useWeb3React } from '@web3-react/core'
// import { InjectedConnector } from '@web3-react/injected-connector'
function App() {
  return (
   <>
    <Web3ReactProvider getLibrary>
      <BrowserRouter>
   <Base>
   <Routes>
    <Route index path='/' element={<Home/>} />
   </Routes>
   </Base>
   </BrowserRouter>
    </Web3ReactProvider>
   
   </>
  );
}

export default App;
