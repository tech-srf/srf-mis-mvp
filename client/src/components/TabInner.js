import React from 'react'
import Education from '../pages/registration/Education'
import Counseling from '../pages/registration/Counseling'
import RegistrationCard from '../pages/registration/registrationCard'
import Attendance from '../pages/attendance/Attendance'

function TabInner() {
    return (
        <div className='tab-inner'>
            <RegistrationCard />        
            <Education />
            <Counseling />
            <Attendance />
            
        </div>
    )
}

export default TabInner