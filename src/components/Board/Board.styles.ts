import styled from 'styled-components'
import { theme } from 'styles/color'

export const BoardContent = styled.div<{ makeSquareLayout: () => string | undefined }>`
  display: grid;
  grid-template-columns: ${props => props.makeSquareLayout()};
`

export const CellItem = styled.span<{ isHovered: boolean }>`
  background: ${props => (props.isHovered ? theme.colors.skye : theme.colors.white)};
  border: 1px solid ${theme.colors.black};
  width: 35px;
  height: 35px;
`
