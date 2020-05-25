import React from 'react';

import AboutComponent from '../components/AboutComponent';

const InfoScreen = () => {
    return ( 
        <Scroll contentContainerStyle={
            {justifyContent: 'center', 
            alignItems: 'center',
            paddingBottom: 50}}>
            <AboutComponent /> 
        </Scroll>
     );
}
 
export default InfoScreen;