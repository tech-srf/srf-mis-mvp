import React, { useState, Fragment } from 'react'
import NavSideBar from '../../components/NavSideBar'
import BoxContainer  from '../../components/BoxContainer'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Clinic from './Clinicsesssion'
import School from './Schoolsession'

const Attendance = () => {
    const [key, setKey] = useState('Clinic');
    

    return (
        <Fragment>
            <NavSideBar />
            <BoxContainer>
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2 text-success">Record Attendance</h2>
            </div>
            {/* CLINIC TAB */}
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="clinic" title="Clinic">
                    <Clinic />
                </Tab>
{/* SCHOOL TAB */}
                <Tab eventKey="school" title="School">
                    <School />
                </Tab>
            </Tabs>
            </BoxContainer>
        </Fragment>

    )
}

export default Attendance