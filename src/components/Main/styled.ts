import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`

export const GameSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const ButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const GameCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameCardImage = styled.img.attrs(props => ({
    src: props.id ? `https://cdn2.softswiss.net/i/s2/${props.id}.png` : ''
}))`
    
`

export const GameCardTitle = styled.p`
`

export const Button = styled.button`
`