import styled from 'styled-components'
import { theme } from 'styles/color'

export const HoveredSquaresWrapper = styled.div`
  height: 180px;
  width: 25%;
  overflow: auto;
`

export const HoveredSquaresContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const HoveredSquaresItem = styled.div`
  background: ${theme.colors.yellow};
  padding: 1rem;
  margin: 0.5rem 0;
`
