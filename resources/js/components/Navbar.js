import React from 'react'
import { Heading, Pane, SelectMenu, Button, SearchInput, CaretDownIcon } from 'evergreen-ui'

export default function Navbar(props) {
  return (
    <Pane display="flex" alignItems="center" justifyContent="space-between" marginBottom={30}>
      <Heading size={900}>
        Hello Human! 👋
      </Heading>

      <Pane display="flex" alignItems="center">
        <SearchInput onChange={e => props.filterByName(e.target.value)} placeholder="Search..." marginRight={10} />

        <SelectMenu
          title="Filter by status"
          hasFilter={false}
          options={[
            {
              label: 'En progreso',
              value: 0,
            },
            {
              label: 'Completado',
              value: 1,
            },
            {
              label: 'Todos',
              value: 2,
            },
          ]}
        >
          <Button iconAfter={CaretDownIcon} disabled>Filter by</Button>
        </SelectMenu>
      </Pane>
    </Pane>
  )
}
