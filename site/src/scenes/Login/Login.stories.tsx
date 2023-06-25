import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AuthHeader } from '@/components/layouts/AuthHeader';
import { CommonLayout } from '@/components/layouts/CommonLayout';

import LoginScene from './Login.scene';

export default {
  title: 'Scenes/Home',
  component: LoginScene,
  decorators: [
    (Story) => (
      <AuthHeader title={''} desc={''}>
        <Story />
      </AuthHeader>
    ),
  ],
} as ComponentMeta<typeof LoginScene>;

export const Home: ComponentStory<typeof LoginScene> = () => <LoginScene />;
