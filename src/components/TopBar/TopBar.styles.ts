import styled from 'styled-components'
import { theme } from 'styles/color'

export const TopBarWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

export const TopBarButton = styled.button`
  border-radius: 8px;
  border: none;
  background: ${theme.colors.blue};
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 1rem;
  width: 20%;

  &:disabled,
  &[disabled] {
    background-color: ${theme.colors.gray};
    cursor: no-drop;
  }
`
