import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import themeDecorator from './decorators'
import TextFieldWIthLabel from '../components/TextFieldWithLabel'

export default {
  title: 'Components/TextField',
  component: TextFieldWIthLabel,
  parameters: {
    docs: {
      page: null
    }
  },
  decorators: [themeDecorator]
} as ComponentMeta<typeof TextFieldWIthLabel>

const Template: ComponentStory<typeof TextFieldWIthLabel> = (args) => <TextFieldWIthLabel {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Test 1',
  placeholder: 'You can write anything here'
}
