import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { ADD_TASK, DELETE_ALL } from '../../types'
import toast, { Toaster } from 'react-hot-toast';
export const InputForm = styled.input`
    width: 100%;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    padding-left: 1rem;
    font-family: sans-serif;


`
const FormCont = styled.form`
    width: 90%;
    height: 10rem;
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const ButtonTest = styled.button`
    min-width: 6rem;
    height: 3rem;
    border-radius: 1rem;
    border: none;
    background-color: #4444e9;
    color: white;
    cursor: pointer;

`


export const options = {
    duration: 1000,
    position: "top-center",
    success: {
        style: {
            background: 'green',
        },
    },
    error: {
        style: {
            background: 'red',
            color: "white",
            fontSize: "1.5rem",
            fontFamily: "sans-serif"
        },

    }
}
const FormTodo = ({ tasks }) => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target.task.value === "") {
            e.target.task.value = ""
            return toast.error("ingresa una tarea")
        }
        if (tasks.some(task => task.text.toLowerCase() === e.target.task.value.toLowerCase())) {
            e.target.task.value = ""
            return toast.error("esta tarea ya existe")
        }
        dispatch({ type: ADD_TASK, text: e.target.task.value.trim(), })
        e.target.task.value = ""
    }
    return (
        <FormCont onSubmit={handleSubmit}>
            <InputForm type="text" name='task' placeholder='Ingresa una tarea...' />
            <ButtonTest>Save</ButtonTest>
            <ButtonTest type='button' onClick={() => dispatch({ type: DELETE_ALL })}>Delete all</ButtonTest>
            <Toaster toastOptions={options} />
        </FormCont>


    )
}

export default FormTodo