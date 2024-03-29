import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useEffect, useState} from "react"

const AddComment = (props) => {
    const [state, setState] = useState({
        contenutoCommento: {
            comment: '',
            rate: '',
            elementId: `${props.idFilm}`
        }
    })

  useEffect(()=>{
    setState({
        contenutoCommento:{
            ...state.contenutoCommento,
            elementId: `${props.idFilm}`
        }
    })
  },[props.idFilm])

    const eseguifetchPost = () => {
        return(
            fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
                method: "POST",
                headers: {
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzBkZGY4MWI0MjAwMTM5YjI3ZTciLCJpYXQiOjE2ODA1MjQ5NjMsImV4cCI6MTY4MTczNDU2M30.H1RTrJ1fRu495y_VYqsAHm2xWipWLTP6ZSl-UrPpoH0",
                },
                body: JSON.stringify(state.contenutoCommento)
            })
            .then(response => {
                if(response.ok) {
                    alert("Your comment has been posted.")
                    setState({contenutoCommento: {
                        comment: "",
                        rate: "",
                        elementId:`${props.idFilm}`
                    }})
                    props.incremento(props.counter+1)
                } else {
                    alert("ERROR, your comment has not been posted.")
                }
            })
            .catch(err => {
                console.log('ERROR', err)
            })
        )
    }
    return (
        <div className='AreaCommentoPosta mt-2'>
            <Form.Label htmlFor="inputPassword5">Comment:</Form.Label>
            <Form.Control type="text" 
                 value={state.contenutoCommento.comment}
                onChange={(e) => {
                    setState({
                        contenutoCommento: {
                            ...state.contenutoCommento,
                            comment: e.target.value,
                        }
                    })
                }}
            />
            <Form.Text id="passwordHelpBlock" muted>
                Insert your comment here
            </Form.Text><br />
            <Form.Label htmlFor="inputPassword5">Rating:</Form.Label>
            <Form.Control type="text" id="inputPassword5" aria-describedby="passwordHelpBlock"
                 value={state.contenutoCommento.rate}
                onChange={(e) => {
                    setState({
                        contenutoCommento: {
                            ...state.contenutoCommento,
                            rate: e.target.value,
                        }
                    })
                }}
            />
            <Form.Text id="passwordHelpBlock" muted>
                Insert a rating between 1 to 5 included
            </Form.Text>
            <Button className='mt-1' variant="primary" onClick={eseguifetchPost}>
                Submit comment
            </Button>
        </div>

    )
}

export default AddComment