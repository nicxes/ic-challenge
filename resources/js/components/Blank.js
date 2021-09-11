import { Pane, Heading } from 'evergreen-ui'
import React from 'react'


export default function Blank() {
  return (
    <Pane height={420} display="flex" alignItems="center" justifyContent="center" background="#fff" border="default">
      <Heading>
        We did not find any tasks today 🤔
      </Heading>
    </Pane>
  )
}
