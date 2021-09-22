import React from 'react'
import RifThemeProvider from '../components/RifThemeProvider'
import { Story } from '@storybook/react'

const themeDecorator = (Story: Story) => (
    <RifThemeProvider>
      <Story />
    </RifThemeProvider>
)

export default themeDecorator
