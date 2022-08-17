import React from 'react'
import { Form } from 'react-bootstrap'

function FileUpload() {
    return (
        <div className="container">
            <h5 className="section-header text-success">Document Uploads</h5>
            <p className="card-text mt-4">
                SRF has a duty of care for the children and will be responsible to ensure child safety
                and cover medical cost related to rugby injuries.
            </p>
            <strong>
                Required documents for registration. 
                <br />
                <em>Please upload the following items:
                    <ul>
                        <li>Copy of child birth certificate.</li>
                        <li>Copy of parents/guardian id.</li>
                        <li>Passport size photo.</li>
                        <li>Exam results copy.</li>
                    </ul>
                </em>
            </strong>
            <div className="mb-3 mt-3">
                <Form.Control method="POST" type="file" multiple  />
            </div>
            <div className="form-group row pt-2">
                <div className="col-sm-4">
                    <input type="submit" method="POST" value="Attach" className="btn btn-success"/>
                </div>
            </div>
        </div>
    )
}

export default FileUpload