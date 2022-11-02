import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { CircularProgress } from "@mui/material"
const WrapperPokemon = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  min-height: 10rem;
  flex-direction: column;
  gap:2rem;
  width: 100%;
  & h2{
    color: white;
    font-size: 2rem;
  }
`



const PokeWrapper = ({ pokemon }) => {
  const fetchPokemon = () => {
    if (pokemon === "") {
      return
    }
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

  }
  const { isLoading, data, error, isError, isFetching, refetch } = useQuery("pokemons", fetchPokemon, {
    staleTime: 5000,
    cacheTime: 5000,
    enabled: false,
  })


  useEffect(() => {
    refetch()
  }, [pokemon])

  if (!pokemon) return <WrapperPokemon><h2>Ingresa un pokemon...</h2></WrapperPokemon>
  if (isLoading) return <WrapperPokemon><h2>Loading...</h2></WrapperPokemon>
  if (isFetching) return <WrapperPokemon><h2>Fetching</h2>
    <CircularProgress></CircularProgress>
  </WrapperPokemon>
  if (isError) return <WrapperPokemon><h2>Ha ocurrido un error en el sevidor o Has ingresado un pokemon que no existe</h2></WrapperPokemon>
  return (
    <WrapperPokemon>
      {data && <PokemonCard {...data.data} />}
    </WrapperPokemon>
  )
}

export default PokeWrapper