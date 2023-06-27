import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/components/layouts/CommonLayout';

import CardComponent from './Card';

export default {
  title: 'components/Card',
  component: CardComponent,
  decorators: [
    (Story) => (
      <CommonLayout disableLayout={false}>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args} />
);

export const Card = Template.bind({});

Card.args = {
  desc: 'Ujian Teknik Bedah ',
  lecturer: 'dr. John Doe, S.Ked., Sp.G.',
  examTime: '14:25 - 15:25 AM',
  date: 'Selasa 12 juni 2023',
  time: '08:00:00',
};
