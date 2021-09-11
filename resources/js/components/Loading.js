import React from 'react'
import { Spinner } from 'evergreen-ui'

export default function Loading() {
  return (
    <div className="Loading">
      <Spinner size={24} />
    </div>
  )
}
