import React, { useState } from 'react'
import Image from '../assets/img/man.png'
import BoxContainer from '../components/BoxContainer'
import { Form } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import NavSideBar from '../components/NavSideBar'


const Education = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({})
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })
        
        if(!!errors[field])
        setErrors({
            ...errors,
            [field]:null
        })
    }

    return (
        <div>
            <NavSideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h3 className="h3">Education</h3>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    </div>
                </div>
                    <BoxContainer>
                    <div>
                        <input className="form-control-search p-2 m-3" type="text" placeholder="Search for..." aria-label="Search for..."
                                aria-describedby="btnNavbarSearch"
                        />
                    </div>

                        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Attendance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <Form.Check
                                    inline
                                    value="present"
                                    onChange={e=>console.log(e.target.value)}
                                />
                            </td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                                <Form.Check
                                    inline
                                    value="present"
                                    onChange={e=>console.log(e.target.value)}
                                />
                            </td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>Bird</td>
                            <td>
                                <Form.Check
                                    inline
                                    value="present"
                                    onChange={e=>console.log(e.target.value)}
                                />
                            </td>
                            </tr>
                        </tbody>
                </Table>


                    </BoxContainer>

            </main>
        </div>
    )
}

export default Education