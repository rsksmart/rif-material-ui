import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import themeDecorator from './decorators'
import BigLink from '../components/BigLink'

export default {
  title: 'Components/Links',
  component: BigLink,
  parameters: {
    docs: {
      page: null
    }
  },
  decorators: [themeDecorator]
} as ComponentMeta<typeof BigLink>

const Template: ComponentStory<typeof BigLink> = (args) => <BigLink {...args} />

export const Normal = Template.bind({})
Normal.args = {
  href: '#',
  target: '_blank',
  rel: 'noopener noreferrer',
  children: 'Normal link'
}

export const ButtonLink = Template.bind({})
ButtonLink.args = {
  component: 'button',
  children: 'Button link',
  onClick: () => {}
}
