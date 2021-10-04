import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import themeDecorator from './decorators'
import TextFieldWithLabel from '../components/TextFieldWithLabel'
import DownIcon from '@mui/icons-material/South'
import IconButton from '@mui/material/IconButton'
import ActionLink from '../components/ActionLink'

export default {
  title: 'Components/TextField',
  component: TextFieldWithLabel,
  parameters: {
    docs: {
      page: null
    }
  },
  decorators: [themeDecorator]
} as ComponentMeta<typeof TextFieldWithLabel>

const Template: ComponentStory<typeof TextFieldWithLabel> = (args) => <TextFieldWithLabel {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  placeholder: 'Write anything here'
}

export const WithButton = Template.bind({})
WithButton.args = {
  label: 'Label',
  placeholder: 'Write anything here',
  children: (
    <IconButton sx={{ p: '10px' }} aria-label="lower case">
      <DownIcon />
    </IconButton>
  )
}

export const HelpText = Template.bind({})
HelpText.args = {
  label: 'Label',
  placeholder: 'Write anything here',
  helperText: 'This is a demo'
}

export const Error = Template.bind({})
Error.args = {
  label: 'Label',
  placeholder: 'Write anything here',
  helperText: 'This field is required',
  error: true
}

export const DefaultFocused = Template.bind({})
DefaultFocused.args = {
  label: 'Label',
  placeholder: 'Write anything here',
  autoFocus: true
}

export const WithAction = () => (
  <TextFieldWithLabel key="example-with-action" label="Label" placeholder="Write anything here">
    <ActionLink component="button" onClick={() => {}}>Action</ActionLink>
  </TextFieldWithLabel>
)
