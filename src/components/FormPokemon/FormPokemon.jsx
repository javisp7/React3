import React, { createContext } from 'react'
import styled from 'styled-components'
import toast, { Toaster } from 'react-hot-toast';
import { options } from '../../components/FormTodo/FormTodo'
import { ButtonTest, InputForm } from '../FormTodo/FormTodo'


const FormPoke = styled.form`
  min-width: 40rem;
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
`
const FormPokemon = ({ pokemon, setPokemon, refetch }) => {
  const pokeInfoSubmit = (e) => {
    e.preventDefault()
    if (e.target.pokeInput.value === "") {
      e.target.pokeInput.value = ""
      return toast.error("ingresa una pokemon")
    }
    if (pokemon === e.target.pokeInput.value.toLowerCase()) {
      e.target.pokeInput.value = ""
      return toast.error("ya has ingresado este pokemon")

    }
    setPokemon(e.target.pokeInput.value)
    e.target.pokeInput.value = ""
  }
  return (
    <FormPoke onSubmit={pokeInfoSubmit} >
      <InputForm type="text" name='pokeInput' placeholder='Ingresa un pokemon...' />
      <ButtonTest type='submit'>Search</ButtonTest>
      <Toaster toastOptions={options} />

    </FormPoke>

  )
}


export default FormPokemon