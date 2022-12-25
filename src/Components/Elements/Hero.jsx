import React from "react";
import { useState } from "react";
import { MetamaskStateProvider } from "use-metamask";
import { app, db } from "./FIrebase";
import {  setDoc, doc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
// import {ethereum} from "web3"




const Hero = () => {
  // var ethereum;
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  const handleAction = (event) => {
    
    let account;
    ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
      account = accounts[0];
      setAddress(account);
      // console.log(account);
      ethereum
        .request({
          method: "eth_getBalance",
          params: [account, "latest"],
        })
        .then((result) => {
          setBalance(result);
          // console.log(result);
        });
    });
  };
  const firebaseAdd=(e)=>{

    e.preventDefault( );
    // let res;
    setDoc(doc(db, "users"), 
      {
        address,
        balance,
        
      },
      setAddress,
      setBalance
    );

    // e.preventDefault();
    // const auth = getAuth();
    // setDoc(doc(db, "users"), {
    //   address: address,
    //   balance: balance,
    // }).then(() => {
    //   console.log("done2");
    // });
  }
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 rounded-4 bg-warning text-center text-white mt-5">
              <h1 className="mt-5 text-start">Account address: <span className="text-danger">{address}</span> </h1>
              <h1 className="text-start">current Amount: <span className="text-danger">{balance}</span> </h1>

              <button className="btn btn-danger mb-5 " onClick={handleAction}>connect-wallet</button>
              <button className="btn btn-danger mb-5 ms-5" onClick={firebaseAdd}>firebaseAdd</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
