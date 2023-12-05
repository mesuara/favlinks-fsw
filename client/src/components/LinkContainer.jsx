import Table from './Table'
import Form from './Form'
import {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LinkContainer(){
 const[favLinks, setFavLinks] = useState([])
 
    const handleRemove = (index) => {
        console.log("inside remove", index)
        setFavLinks(favLinks.filter((_, i) => i !== index))
    
      }
    
      const handleSubmit = (favLink) => {
        console.log(favLink)        

           
           setFavLinks([...favLinks, favLink])
        //    console.log(favLink)
        // console.log(favLinks)
      }

    return(
        <Container>
        <Row>
            <h1>My Favorite Links</h1>
        </Row>
        <Row className="justify-content-md-start">
            <p>Table Info</p>
            <Col xs lg='6'>
            <Table linkData={favLinks} removeLink={handleRemove}/>
            </Col>
        </Row>
        <Row className="justify-content-md-start">
            <h1>Add New</h1>
            <Col xs lg='6'>
            <Form onNewSubmit={handleSubmit}/>
            </Col>
        </Row>
        </Container>
    )

}
export default LinkContainer