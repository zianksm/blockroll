import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/components/layouts/CommonLayout';

import LoginFormComponents from './LoginForm';

export default {
  title: 'components/LoginForm',
  component: LoginFormComponents,
  decorators: [
    (Story) => (
      <CommonLayout disableLayout={false}>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof LoginFormComponents>;

const Template: ComponentStory<typeof LoginFormComponents> = (args) => (
  <LoginFormComponents {...args} />
);

export const LoginForm = Template.bind({});

LoginForm.args = {
  titleEmail: 'Email',
  titlePassword: 'Password',
  placeholderEmail: 'Masukan email anda disini',
  placeholderPassword: 'Masukan kata sandi anda',
  required: false,
};
