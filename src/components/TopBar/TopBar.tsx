import React, { FC } from 'react'
import AsyncSelect from 'react-select/async'

import { SelectorOptionType } from 'types/types'

import { TopBarButton, TopBarWrapper } from 'components/TopBar/TopBar.styles'

interface TopBarProps {
  drawCells: () => void
  fetchData: () => void
  handleChangeSelector: (selector: SelectorOptionType) => void
  selectedOption: SelectorOptionType
}

const TopBar: FC<TopBarProps> = ({ selectedOption, fetchData, handleChangeSelector, drawCells }) => {
	const customStyles = {
		container: (provided: any) => ({
			...provided,
			width: '80%',
		}),
	}

	return (
		<TopBarWrapper>
			<AsyncSelect styles={customStyles}
									 loadOptions={fetchData}
									 placeholder="Pick mode"
									 getOptionLabel={(e: any) => e.name}
									 getOptionValue={(e: any) => e.field}
									 defaultOptions
									 value={selectedOption}
									 onChange={handleChangeSelector}/>
			<TopBarButton disabled={!selectedOption} onClick={drawCells}>START</TopBarButton>
		</TopBarWrapper>
	)
}

export default TopBar
