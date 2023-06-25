import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/components/layouts/CommonLayout';

import PasswordFormComponents from './OTPInput';

export default {
  title: 'components/PasswordForm',
  component: PasswordFormComponents,
  decorators: [
    (Story) => (
      <CommonLayout disableLayout={false}>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof PasswordFormComponents>;

const Template: ComponentStory<typeof PasswordFormComponents> = (args) => (
  <PasswordFormComponents {...args} />
);

export const Card = Template.bind({});

// Card.args = {
//   title: 'Password Form Component',
//   placeholder: 'Masukan kata sandi anda',
// };
