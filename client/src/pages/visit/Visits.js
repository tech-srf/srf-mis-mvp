import React, { useState, Fragment } from 'react'
import NavSideBar from '../../components/NavSideBar'
import BoxContainer  from '../../components/BoxContainer'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Class8 from './Class8'
import Casemanagement from './Casemanagement'

const Visits = () => {
    const [key, setKey] = useState('Class8');
    
    return (
        <Fragment>
            <NavSideBar />
            <BoxContainer>
            <div className="flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2 text-success">Visits</h2>
            </div>
            {/* CLASS 8* TAB */}
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="class8" title="Class 8">
                    <Class8 />
                </Tab>
            {/* CASE MANAGEMENT TAB */}
                <Tab eventKey="casemanagement" title="Case Management">
                    <Casemanagement />
                </Tab>
            </Tabs>
            </BoxContainer>
        </Fragment>

    )
}

export default Visits