import React from 'react'
import {Link, useLocation} from 'react-router-dom'

function TabNav(){
    const location = useLocation();
    return (
        <div className="tab-nav">
            <Link to="/registrationCard " className={location.pathname==='/registrationCard'?'tab_active':''}>Details</Link>
            <Link to="/tabs/tab2" className={location.pathname==='/tabs/tab2'?'tab_active':''}>Education</Link>
            <Link to="/tabs/tab3" className={location.pathname==='/tabs/tab3'?'tab_active':''}>Counseling</Link>
            <Link to="/tabs/tab4" className={location.pathname==='/tabs/tab4'?'tab_active':''}>Attendance</Link>
        </div>
    )
}

export default TabNav;