import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Details } from './Details'

storiesOf('Screens/Details', module)
  .addDecorator(withKnobs)
  .add('default', () => <Details />)
