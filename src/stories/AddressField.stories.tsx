import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Resolver from '@rsksmart/rns-resolver.js'
import themeDecorator from './decorators'
import AddressField from '../components/AddressField'

export default {
  title: 'Components/AddressField',
  component: AddressField,
  parameters: {
    docs: {
      page: null
    }
  },
  decorators: [themeDecorator]
} as ComponentMeta<typeof AddressField>

const Template: ComponentStory<typeof AddressField> = (args) => <AddressField {...args} />

// @ts-ignore
// eslint-disable-next-line new-cap
const resolver = new Resolver.forRskTestnet()
export const Primary = Template.bind({})
Primary.args = {
  label: '',
  onReceiverAddressChange: () => {},
  resolverFn: resolver.addr.bind(resolver),
  regexValidation: /\.rsk$/
}
