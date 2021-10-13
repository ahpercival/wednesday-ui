import React, { memo } from 'react'
import { Home } from 'routes'

const AppView = ({ message }) => (
  <div>
    <Home />
  </div>
)

export default memo(AppView)
