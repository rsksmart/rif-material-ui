import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import themeDecorator from './decorators'
import AddressField from '../components/AddressField'

export default {
  title: 'Components/TextField',
  component: AddressField,
  parameters: {
    docs: {
      page: null
    }
  },
  decorators: [themeDecorator]
} as ComponentMeta<typeof AddressField>

const Template: ComponentStory<typeof AddressField> = (args) => <AddressField {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'TextBu',
  label: '',
  onReceiverAddressChange: () => {}
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: '',
  onReceiverAddressChange: () => {}
}
