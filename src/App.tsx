import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { api } from 'utils/api'
import { BoardType, SelectorOptionType } from 'types/types'

import Board from 'components/Board/Board'
import TopBar from 'components/TopBar/TopBar'
import HoveredSquares from 'components/HoveredSquares/HoveredSquares'

import { BaseStyle } from 'styles/base.styles'
import { theme } from 'styles/color'

function App() {
  const [selectedOption, setSelectedOption] = useState<SelectorOptionType>(null)
  const [isShowTable, setIsShowTable] = useState<boolean>(false)
  const [board, setBoard] = useState<Array<BoardType>>([[]])

  const fetchData = () => {
    return api.get('').then(res => {
      return res.data
    })
  }

  const toggleBoardValue = (rowIndex: number, cellIndex: number) => {
    let tempItems = [...board]
    tempItems[rowIndex][cellIndex] = !tempItems[rowIndex][cellIndex]
    setBoard(tempItems)
  }

  const drawCells = () => {
    if (selectedOption) {
      const tempArray = Array(selectedOption.field)
        .fill(false)
        .map(() => Array(selectedOption.field).fill(false))
      setBoard(tempArray)
    }
    setIsShowTable(true)
  }

  const handleChangeSelector = (selector: SelectorOptionType) => {
    setSelectedOption(selector)
    setIsShowTable(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <BaseStyle />
      <AppWrapper>
        <TopBar fetchData={fetchData}
                drawCells={drawCells}
                handleChangeSelector={handleChangeSelector}
                selectedOption={selectedOption} />
        <Content>
          {isShowTable && (
            <>
              <Board selectedOption={selectedOption}
                     board={board}
                     toggleBoardValue={toggleBoardValue} />
              <HoveredSquares board={board} />
            </>
          )}
        </Content>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`
