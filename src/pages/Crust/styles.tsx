import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
  margin-bottom: 6rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
  padding: 0 10px;
  position: relative;
  text-align: center;
  width: 100%;
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  margin-top: 5rem;

  @media screen and (min-width: 998px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Input = styled.input`
  width: 20px;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  margin-top: 20px;
  color: #000;
`

export const Box = styled.div`
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(117,141,166,.2142);
  color: #000;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  height: 100%;
  justify-items: center;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
`

export const Image = styled.div`
  margin: 10px 0;
`

export const Description = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
  padding: 1rem 0;
`

export const Value = styled.div`
  margin-bottom: 1.0rem;
`

export const Button = styled(Link)` 
  background-color: rgb(10, 19, 42);
  border-radius: 0.5rem;
  border: 2px solid rgb(11, 32, 85);
  color: rgb(255, 255, 255);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.7rem;
  padding: 1rem 0;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  width: 100%;

  @media screen and (min-width: 968px) {
    grid-column: 3;
    grid-row: 2;
  }
`

export const Loading = styled.div`
  margin: 150px;
  font-weight: 600;
  font-size: 3.6rem;
  line-height: 4.6rem;
  color: #21222C;
`