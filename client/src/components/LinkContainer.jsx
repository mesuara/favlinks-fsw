import Table from './Table'
import Form from './Form'
import { useState, useEffect } from 'react'
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
      const getLinks = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/linksgi')
            const data = await response.json()
            setFavLinks(data)
        } catch (error) {
            console.error(error)
        }
    }

    const addLink = async (favLink) => {
        try {
            await fetch('http://localhost:3000/api/links', {
                method: 'POST',
                body: JSON.stringify(favLink),
                headers: { "Content-type": "application/json" }
            });
        } catch (error) {
            console.error(error);
        }
    };

    const deleteLink = async (id) => {
        try {
            await fetch(`http://localhost:3000/api/links${id}`, {
                method: 'DELETE',
                body: JSON.stringify({ id }),
                headers: { "Content-type": "application/json" }
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getLinks()
    }, [])

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