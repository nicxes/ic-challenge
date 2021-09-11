import React, { useState } from 'react'
import { Pane, Heading, Text, SideSheet, Paragraph, Card, TextInputField, TextareaField, Button, IconButton, TrashIcon, toaster, Badge, TickCircleIcon, TickIcon } from 'evergreen-ui'

export default function Task(props) {
  const [isShown, setIsShown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [task, setTask] = useState({
    id: props.id,
    title: props.title,
    description: props.description,
    completed: props.completed
  });
  
  function updateTask() {
    setIsLoading(true)

    axios.put(`/api/tasks/${task.id}`, task)
      .then(res => {
        console.log(res)
        toaster.success('Task created successfully')
        setIsShown(false)
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        toaster.danger('Something went wrong with the API')
        setIsShown(false)
        setIsLoading(false)
      })
  }

  function completeTask() {
    setIsLoading(true)

    axios.put(`/api/tasks/${task.id}`, { ...task, completed: true })
      .then(res => {
        console.log(res)
        toaster.success('Good Job! Keep up the good work 💪')
        setIsShown(false)
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
        toaster.danger('Something went wrong with the API')
        setIsShown(false)
        setIsLoading(false)
      })
  }

  function destroyTask() {
    setIsLoading(true)

    axios.delete(`/api/tasks/${task.id}`)
      .then(res => {
        console.log(res)
        toaster.success('Task removed successfully')
        setIsShown(false)
        setIsLoading(false)
        props.handleDelete(task.id)
      })
      .catch(err => {
        console.error(err)
        toaster.danger('Something went wrong with the API')
        setIsShown(false)
        setIsLoading(false)
      })
  }

  return (
    <>
      <SideSheet
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column'
        }}
        preventBodyScrolling
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16} borderBottom="muted">
            <Heading size={600}>
              Your Task
            </Heading>
            <Paragraph size={400} color="muted">
              { props.completed ? 'You can only delete completed tasks' : 'You can edit and remove your task' }
            </Paragraph>
          </Pane>
        </Pane>

        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <Card
            backgroundColor="white"
            elevation={0}
            padding={16}
          >
            <TextInputField
              label="Title"
              required
              value={task.title}
              disabled={Boolean(props.completed)}
              onChange={e => setTask({...task, title: e.target.value})}
            />

            <TextareaField
              label="Description"
              value={task.description ? task.description : ''}
              disabled={Boolean(props.completed)}
              onChange={e => setTask({...task, description: e.target.value})}
              placeholder={props.description ? props.description : 'Write something here'}
            />

            <Pane display="flex" alignItems="center" justifyContent="space-between">
              <Pane>
                <Button onClick={completeTask} disabled={Boolean(props.completed)} isLoading={isLoading} marginRight={16} appearance="primary" intent="success" iconBefore={TickCircleIcon}>
                  Complete
                </Button>

                <Button onClick={updateTask} disabled={Boolean(props.completed)} isLoading={isLoading} marginRight={16} appearance="minimal">
                  Update Task
                </Button>
              </Pane>
              
                <IconButton onClick={destroyTask} isLoading={isLoading} icon={TrashIcon} intent="danger" />
            </Pane>
          </Card>
        </Pane>
      </SideSheet>

      <Pane
        elevation={0}
        backgroundColor="white"
        display="flex"
        flexDirection="column"
        paddingY={20}
        paddingX={20}
        hoverElevation={2}
        cursor="pointer"
        onClick={() => setIsShown(true)}
      >
        <Heading size={700} marginBottom={10}>
          {props.title}
        </Heading>

        <Text size={300} marginBottom={10}>
          {props.description ? props.description.substring(0, 140) : '-'}
        </Text>

        <Pane>
          <Badge color={props.completed ? 'green' : 'yellow'}>
            {props.completed ? 'Completado' : 'En progreso'}
          </Badge>
        </Pane>
      </Pane>
    </>
  )
}
