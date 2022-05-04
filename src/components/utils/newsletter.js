import { useRef, useEffect} from 'react'
import { Form, Button} from 'react-bootstrap'


const Newsletter = () => {
    const textInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;

            


    }


    return(
        <div className="newsletter_container">
            <h1>Join our newsletter</h1>
            <div className="form">
                <Form onSubmit={handleSubmit} className='mt-4'>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='EXAMPLE: youremail@gmail.com'
                            name="email"
                            ref={textInput}
                        />
                    </Form.Group>
                    <Button className='mt-2' variant="primary" type="submit">
                        Add me to the list
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Newsletter