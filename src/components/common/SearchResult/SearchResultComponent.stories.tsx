import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/components/layouts/CommonLayout';

import SearchResultComponents from './SearchResultComponent';

export default {
  title: 'components/Card',
  component: SearchResultComponents,
  decorators: [
    (Story) => (
      <CommonLayout disableLayout={false}>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof SearchResultComponents>;

const Template: ComponentStory<typeof SearchResultComponents> = (args) => (
  <SearchResultComponents {...args} />
);

export const Card = Template.bind({});

Card.args = {
  creatorName: 'search',
  categoryName: 'search',
  title: 'search',
};
