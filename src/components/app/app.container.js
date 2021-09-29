import React from 'react'
import View from './app.view'

const App = () => {
    const props = {
        message: 'Hello World'
    }
    return <View {...props} />
}
export default App