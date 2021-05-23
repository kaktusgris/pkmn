import React from 'react';
import Loader from 'react-loader-spinner';
import '../variables.scss';

const Spinner = () => {
    return <Loader
        type="BallTriangle"
        color="#F35B04"
        height={100}
        width={100}
      />
    }

export default Spinner;