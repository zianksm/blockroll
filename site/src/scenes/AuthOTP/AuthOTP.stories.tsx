import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AuthHeader } from '@/components/layouts/AuthHeader';
import { CommonLayout } from '@/components/layouts/CommonLayout';

import RegisterScene from './AuthOTP.scene';

export default {
  title: 'Scenes/Home',
  component: RegisterScene,
  decorators: [
    (Story) => (
      <AuthHeader title={''} desc={''}>
        <Story />
      </AuthHeader>
    ),
  ],
} as ComponentMeta<typeof RegisterScene>;

export const Home: ComponentStory<typeof RegisterScene> = () => (
  <RegisterScene />
);
