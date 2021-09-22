import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import themeDecorator from './decorators'
import Layout from '../components/Layout'
import { Typography } from '@mui/material'

export default {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    docs: {
      page: null
    }
  },
  decorators: [themeDecorator]
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <div style={{ marginTop: 30 }}>
      <Typography variant="h1" component="h1">Content</Typography>
    </div>
  </Layout>
)

export const LayoutWithMenu = Template.bind({})
LayoutWithMenu.args = {
  routerLinkComponent: 'a',
  menu: [{ href: '/', label: 'Home' }, { href: '/other', label: 'Other' }]
}

export const LayoutWithoutMenu = Template.bind({})
LayoutWithoutMenu.args = {
}
