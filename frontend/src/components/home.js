import React from 'react';
import LeftPanelSVG from './elements/LeftPanelSVG';
import RightPanel from './elements/RightPanel';
import {Link} from 'react-router-dom'
function Home(){
    return(
        <div>
            <LeftPanelSVG/>
            <RightPanel/>
        </div>
    );
}

export default Home;