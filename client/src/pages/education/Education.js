import React, { useState, Fragment } from 'react'
import NavSideBar from '../../components/NavSideBar'
import BoxContainer  from '../../components/BoxContainer'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Primary from './Primary'
import Secondary from './Secondary'

const Education = () => {
    const [key, setKey] = useState('Clinic');
    

    return (
        <Fragment>
            <NavSideBar />
            <BoxContainer>
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2 text-success">Education Records</h2>
            </div>
            {/* PRIMARY TAB */}
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="clinic" title="Primary">
                    <Primary />
                </Tab>
            {/* SECONDARY TAB */}
                <Tab eventKey="school" title="Secondary">
                    <Secondary />
                </Tab>
            </Tabs>
            </BoxContainer>
        </Fragment>

    )
}

export default Education