import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AuthHeader } from '@/components/layouts/AuthHeader';
import { CommonLayout } from '@/components/layouts/CommonLayout';

import ScheduleScene from './Schedule.scene';

export default {
  title: 'Scenes/Home',
  component: ScheduleScene,
  decorators: [
    (Story) => (
      <CommonLayout disableLayout={false}>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof ScheduleScene>;

export const Home: ComponentStory<typeof ScheduleScene> = () => (
  <ScheduleScene />
);
