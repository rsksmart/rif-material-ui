import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import themeDecorator from './decorators'
import { Button } from '@mui/material'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: null
    }
  },
  decorators: [themeDecorator]
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  children: 'Button'
}
