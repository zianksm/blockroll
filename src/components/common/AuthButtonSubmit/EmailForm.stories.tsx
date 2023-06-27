import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/components/layouts/CommonLayout';

import EmailFormComponents from './AuthBtnSubmit';

export default {
  title: 'components/Card',
  component: EmailFormComponents,
  decorators: [
    (Story) => (
      <CommonLayout disableLayout={false}>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof EmailFormComponents>;

const Template: ComponentStory<typeof EmailFormComponents> = (args) => (
  <EmailFormComponents {...args} />
);

export const Card = Template.bind({});

// Card.args = {
//   title: 'Card component',
//   placeholder: 'Enter your email here',
// };
