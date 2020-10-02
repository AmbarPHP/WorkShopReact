import React from 'react';
import HeaderBar from './HeaderBar';
import HeaderTop from './HeaderTop';
// import HeaderMultiLevelMenu from './HeaderMultiLevelMenu';

const MainHeader =()=>{
return (
<div className="mega-header">
{/* <HeaderMultiLevelMenu></HeaderMultiLevelMenu> */}
<HeaderBar></HeaderBar>
<HeaderTop></HeaderTop>

    </div>
);
    
}
export default MainHeader