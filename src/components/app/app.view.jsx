import React, { memo } from 'react'
import { Header } from 'components'

const AppView = ({ message }) => (
    <div className="my-10">
        <Header />
    </div>
)

export default memo(AppView)