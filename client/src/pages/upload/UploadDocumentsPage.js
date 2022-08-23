import React, { useState } from 'react'
import { Typography, Button, Form } from 'antd'
import NavSideBar from '../../components/NavSideBar'
import BoxContainer from '../../components/BoxContainer'
import FileUpload from '../../components/utils/FileUpload'
import Axios from 'axios';

const { Title } = Typography;

const DocumentTypes = [
  {key: 1, value: "Child birth certificate"},
  {key: 2, value: "Father's ID"},
  {key: 3, value: "Mother's ID"},
  {key: 4, value: "Guardian's ID"},
  {key: 5, value: "Passport size photo"},
  {key: 6, value:  "Exam results copy"}
]

function UploadDocumentsPage(props) {

    const [DocumentTypeValue, setDocumentTypeValue] = useState(1)
    const [Images, setImages] = useState([])
    const onDocumentTypesSelectChange = (event) => {
        setDocumentTypeValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();


        if (!DocumentTypeValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            images: Images,
            documents: DocumentTypeValue,
        }

        Axios.post('', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Document Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Document')
                }
            })

    }


  return (
    <div>
      <NavSideBar />
      <BoxContainer>
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <Title level={2}>Upload Player Docs</Title>
          </div>
          <Form onSubmit={onSubmit} >
              {/* DropZone */}
              <FileUpload refreshFunction={updateImages} />

              <br />
              <br />
              <select onChange={onDocumentTypesSelectChange} value={DocumentTypeValue}>
                  {DocumentTypes.map(item => (
                  <option key={item.key} value={item.key}>{item.value} </option>
                  ))}
              </select>
              <br />
              <br />

              <Button className="btn btn-success" onClick={onSubmit}>
                  Submit
              </Button>
          </Form>
        </div>
      </BoxContainer>
    </div>
  )
}

export default UploadDocumentsPage