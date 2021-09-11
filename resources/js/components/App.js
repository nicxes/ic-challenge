import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Loading from './Loading'
import Navbar from './Navbar'
import Blank from './Blank'
import Create from './Create'
import Task from './Task'

// Custom React Hook
import useFetch from '../hooks/useFetch'

import { Pane } from 'evergreen-ui'

export default function App() {
  const { data: tasks, isLoading, error } = useFetch('/api/tasks')
  const [ search, setSearch ] = useState('')
  const [ state, setState ] = useState(0)

  return (
    <>
      <main>
        <div className="container">
          { isLoading ? <Loading /> : null }

          <Navbar filterByName={text => setSearch(text)} state={number => filterByState(number)} />

          { 
            tasks.length > 0 ?
            <Pane display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={20}> 
              {tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase())).map(task => 
              <Task
                id={task.id}
                title={task.title}
                description={task.description}
                completed={task.completed}
                key={task.id}
              />
            )}
            </Pane> : <Blank />
          }
          
          <Create/>

        </div>
      </main>
    </>
  )
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
