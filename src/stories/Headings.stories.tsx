import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import themeDecorator from './decorators'
import { Typography } from '@mui/material'

export default {
  title: 'Components/Headings',
  component: Typography,
  parameters: {
    docs: {
      page: null
    }
  },
  decorators: [themeDecorator]
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const Title = Template.bind({})
Title.args = {
  variant: 'h1',
  component: 'h1',
  children: 'Title'
}

export const Subtitle = Template.bind({})
Subtitle.args = {
  variant: 'h2',
  component: 'h2',
  children: 'Subtitle'
}

export const BigLabel = Template.bind({})
BigLabel.args = {
  variant: 'h3',
  component: 'span',
  children: 'Label'
}
