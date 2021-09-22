import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import themeDecorator from './decorators'
import LinearLoading from '../components/LinearLoading'

export default {
  title: 'Components/Loading',
  component: LinearLoading,
  parameters: {
    docs: {
      page: null
    }
  },
  decorators: [themeDecorator]
} as ComponentMeta<typeof LinearLoading>

const Template: ComponentStory<typeof LinearLoading> = (args) => <LinearLoading {...args} />

export const Default = Template.bind({})
Default.args = {
  isLoading: true
}
