import React, { useState } from 'react'
import { Heading, Paragraph, Pane, IconButton, Button, Card, AddIcon, Portal, SideSheet, TextInputField, TextareaField, toaster } from 'evergreen-ui'

export default function Create() {
  const [isShown, setIsShown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const placeholders = ['Illustration for Nike', 'Finish Brubank Video', 'Call with Lucy for Sales Disuccion', 'Make IA for E-Corp']

  function createTask() {
    const data = {
      title,
      description
    }

    setIsLoading(true)

    axios.post(`/api/tasks`, data)
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
              Create Task
            </Heading>
            <Paragraph size={400} color="muted">
              Add your daily tasks for better time management & organization.
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
              onChange={e => setTitle(e.target.value)}
              placeholder={placeholders[Math.floor(Math.random() * placeholders.length)]}
            />

            <TextareaField
              label="Description"
              onChange={e => setDescription(e.target.value)}
              placeholder="Write something here.."
            />

            <Button onClick={createTask} isLoading={isLoading} marginRight={16} appearance="primary" intent="success">
              Create Task
            </Button>
          </Card>
        </Pane>
      </SideSheet>

      <Portal>
        <Pane position="fixed" bottom={20} right={20}>
          <IconButton
            onClick={() => setIsShown(true)}
            icon={AddIcon}
            size="large"
            appearance="primary"
            intent="success"
            borderRadius={20}
          />
        </Pane>
      </Portal>
    </>
  )
}
