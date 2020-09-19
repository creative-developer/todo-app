import React from 'react'

import { CssBaseline, Container } from '@material-ui/core'

import Header from './Header'
import Filter from './Filter'
import TodoList from './TodoList'
import Form from './Form'

const App = () => {
  return (
    <main className="App">
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Filter />
        <TodoList />
        <Form />
      </Container>
    </main>
  )
}

export default App
