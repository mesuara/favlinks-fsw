import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import FormBS from 'react-bootstrap/Form';


function Form(props){
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")
    return(
        <FormBS className="border border-primary p-3" onSubmit={(event)=>{
            event.preventDefault();
            props.onNewSubmit({name,URL})
            event.target.reset()
          
        }}>
            <FormBS.Group className="mb-3">
            <FormBS.Label >Link Name:</FormBS.Label>
            <FormBS.Control type="text" id="linkName" name="linkName" onChange={(event)=>{
                setName(event.target.value)
            }}  />

            </FormBS.Group>
            <br />
            <br />
            <FormBS.Group className="mb-3">
            <FormBS.Label >Link URL:</FormBS.Label>
            <FormBS.Control type="text" id="linkURL" name="linkURL" onChange={(event)=>{
                setURL(event.target.value)
            }}/>
            </FormBS.Group>
            <br/>
            <br />
            <Button type="submit" value="Submit" variant="primary">Submit</Button>
        </FormBS>
    )
}

export default Form
