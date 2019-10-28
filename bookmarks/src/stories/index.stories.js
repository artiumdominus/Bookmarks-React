import React from 'react';
import { storiesOf } from '@storybook/react';
import Hello from '../components/hello';
import SimpleList from '../components/SimpleList'

storiesOf('Testes', module)
    .add('Hello', ()=> <Hello/>)
    .add('SimpleList', () => <SimpleList value="d"/>)