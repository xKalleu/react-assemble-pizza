import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 10px;
  text-align: center;
  width: 100%;
  max-width: 980px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  @media screen and (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  margin-top: 20px;
  color: #000;
`

export const Box = styled.a`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(117,141,166,.2142);
  color: #000;
  height: 100%;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
`

export const Image = styled.div`

`

export const Description = styled.div`

`