import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { Button } from './Button';

export default {
  title: 'Components - Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    backgrounds: {
      values: [
         { name: 'red', value: '#f00', },
         { name: 'green', value: '#0f0', },
         { name: 'blue', value: '#00f', },
      ],
    },
    viewport: {
      // the viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      // your own default viewport
      // defaultViewport: 'iphone6'
    },
  },
  decorators:  [(Story) => <div style={{ margin: '30px', backgroundColor: 'pink' }}><Story/></div>],
  args: {
    // Now all Button stories will be primary.
    primary: false,
  },
  argTypes: {
    argTypes: {
      width: { 
        control: { type: 'range', min: 400, max: 1200, step: 50 },
      },
    },
    backgroundColor: { control: 'color' },
    loadingState: {
      control: {
        type: 'inline-radio',
        options: ['loading', 'error', 'ready'],
      },
    },
    propertyA: {
      control: {
        type: 'array',
        options: [
          'Item One', 
          'Item Two', 
          'Item Three'
        ],
      },
    },
    boolVal: {
      control: {
        type: 'boolean'
      }
    },
    propertyB: {
      control: {
        type: 'select',
        options: [
          'Another Item One', 
          'Another Item Two', 
          'Another Item Three'
        ],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: [
          'Another Item One', 
          'Another Item Two', 
          'Another Item Three'
        ],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  backgroundColor: 'red'
};
Primary.decorators = [(Story) => <div style={{ border: '1px solid red' }}><Story/></div>]
Primary.storyName = 'I am the primary';
Primary.loaders = [
  async () => ({
    todo: (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
  }),
];

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};
Large.parameters = {
  backgrounds: { default: 'red' },
  // backgrounds: {
  //   grid: {
  //     disable: true
  //   }
  // }
  backgrounds: {
    grid: {
      cellSize: 20,
      opacity: 0.5,
      cellAmount: 5,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Simple = () => <Button backgroundColor="green" label="📚📕📈🤓" />;
