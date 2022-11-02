import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FcApproval, FcAbout } from "react-icons/fc"
import { useSelector } from 'react-redux'
const Header = styled.header`
    width:100%;
    height: 6rem;
    background-color: #DB7092;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`
const NavbarComp = styled.nav`
    & ul{
       color: white;
       height: 100%;
       display: flex;
       align-items: center;
       gap: 1rem;

    }
`
const LinkItem = styled(NavLink)`
  font-size: 1.5rem;
  color: #ffffff;
  text-decoration: none;
  font-family: sans-serif;
  &.active {
    color: #4ad44a;
  };
 `

const Logo = styled.div`
  width: 5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & span{
    font-size: 1.6rem;
    color: white;
    font-family: sans-serif;
    cursor: pointer;

  }
`
const LinkTodo = styled(LinkItem)`
  color: ${props => props.objprops.somecompleted ? "white" : "red"};
  display: flex;
  align-items: center;
  position:relative;
  font-size: ${props => props.objprops.somecompleted ? "1.5rem" : "1.8rem"};
  & span{
    display: ${props => props.objprops.notasks ? "none" : "inline"};
    position: absolute;
    bottom: -2rem;
    right: 30%;
  }
;`

export const Navbar = () => {
  const state = useSelector((state) => state.todo);
  const navigate = useNavigate()
  const objProps = {
    notask: state.length === 0,
    somecompleted: state.every(task => task.completed === true),
  }
  return (
    <Header>
      <Logo> <span onClick={() => navigate("/")}>Home</span></Logo>
      <NavbarComp>
        <ul>
          <LinkTodo objprops={objProps} to={"todo"} >To-Do{objProps.notask ? <span></span> : objProps.somecompleted ? <span><FcApproval /></span> : <span><FcAbout /></span>}</LinkTodo>
          <LinkItem to={"pokemons"}>Pokemons</LinkItem>
        </ul>
      </NavbarComp>
    </Header>
  )
}
