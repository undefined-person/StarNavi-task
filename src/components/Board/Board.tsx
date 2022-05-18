import React, { FC } from 'react'

import { BoardContent, CellItem } from 'components/Board/Board.styles'

import { BoardType, SelectorOptionType } from 'types/types'

interface BoardProps {
  selectedOption: SelectorOptionType
  board: Array<BoardType>
  toggleBoardValue: (rowIndex: number, cellIndex: number) => void
}

const Board: FC<BoardProps> = ({ selectedOption, toggleBoardValue, board }) => {
  const makeSquareLayout = () => {
    if (selectedOption) {
      const columns = []
      for (let i = 0; i < selectedOption.field; i++) {
        columns.push('1fr')
      }
      return columns.join(' ')
    }
  }

  return (
    <BoardContent makeSquareLayout={makeSquareLayout}>
      {board.map((row, rowIndex: number) => (
        <React.Fragment key={rowIndex}>
          {row.map((cell, cellIndex: number) => (
            <CellItem isHovered={cell} onMouseEnter={() => toggleBoardValue(rowIndex, cellIndex)} key={cellIndex} />
          ))}
        </React.Fragment>
      ))}
    </BoardContent>
  )
}

export default Board
