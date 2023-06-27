import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/components/layouts/CommonLayout';

import Dashboard from './Exam.scene';

export default {
  title: 'Scenes/Dashboard',
  component: Dashboard,
  decorators: [
    (Story) => (
      <CommonLayout disableLayout={false}>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof Dashboard>;

export const Home: ComponentStory<typeof Dashboard> = () => <Dashboard />;
