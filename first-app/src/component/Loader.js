import React from 'react';
import Loader from "./component/loading.gif"

export default function Loader() {
  return <div className='container d-flex justify-content-center'>
      <img src={loading} alt="" /> 
  </div>;
}
export default Loader;