import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 6rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
  padding: 0 10px;
  position: relative;
  text-align: center;
  width: 100%;

  a {
    text-decoration: none;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  margin-top: 5rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  margin-top: 20px;
  color: #000;
`

export const Box = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(117,141,166,.2142);
  color: #000;
  height: 100%;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
`

export const Image = styled.img`
  margin: 10px 0;
  max-width: 120px;
  max-height: 70px;
`

export const Input = styled.input`
  width: 20px;
`

export const Description = styled.div`
  border: 1px solid rgb(110,125,151);
  color: rgb(33,34,44);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
  padding: 1rem 0;
  margin-top: 50px;
`

export const Value = styled.div`
  margin-bottom: 1.0rem;
`