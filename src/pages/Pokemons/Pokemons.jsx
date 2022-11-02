import React, { useState } from 'react'
import styled from 'styled-components'
import FormPokemon from '../../components/FormPokemon/FormPokemon'
import { WrapperContainer } from '../../components/GeneralWrapper/WrapperStyle'
import PokeWrapper from '../../components/PokeComp/PokeWrapper'


const WrapperForm = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const WrapperPoke = styled(WrapperContainer)`
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem 0;
`

const Pokemons = () => {
  const [pokemonz, setPoke] = useState("")
  return (
    <>
      <WrapperPoke>
        <WrapperForm>
          <FormPokemon pokemon={pokemonz} setPokemon={setPoke}></FormPokemon>
        </WrapperForm>
        <PokeWrapper pokemon={pokemonz}>
        </PokeWrapper>
      </WrapperPoke>
    </>

  )
}


export default Pokemons