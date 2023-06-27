import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/components/layouts/CommonLayout';

import HomeScene from './ForgotPassword.scene';

export default {
  title: 'Scenes/Home',
  component: HomeScene,
  decorators: [
    (Story) => (
      <CommonLayout disableLayout={false}>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof HomeScene>;

export const Home: ComponentStory<typeof HomeScene> = () => <HomeScene />;
