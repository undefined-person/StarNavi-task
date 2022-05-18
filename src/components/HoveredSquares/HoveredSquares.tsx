import React, { FC } from 'react'

import { BoardType } from 'types/types'

import { HoveredSquaresContent, HoveredSquaresItem, HoveredSquaresWrapper } from 'components/HoveredSquares/HoveredSquares.styles'

interface HoveredSquaresProps {
  board: Array<BoardType>
}

const HoveredSquares: FC<HoveredSquaresProps> = ({ board }) => {
  return (
    <HoveredSquaresWrapper>
      <h2>Hovered squares</h2>
      {board.map((row, rowIndex: number) => (
        <HoveredSquaresContent key={rowIndex}>
          {row.map(
            (cell, cellIndex: number) =>
              cell && (
                <HoveredSquaresItem key={cellIndex}>
                  row {rowIndex + 1} col {cellIndex + 1}
                </HoveredSquaresItem>
              )
          )}
        </HoveredSquaresContent>
      ))}
    </HoveredSquaresWrapper>
  )
}

export default HoveredSquares
