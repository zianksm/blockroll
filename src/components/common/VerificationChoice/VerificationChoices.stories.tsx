import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/components/layouts/CommonLayout';

import VerificationChoicesComponents from './VerificationChoices';

export default {
  title: 'components/Card',
  component: VerificationChoicesComponents,
  decorators: [
    (Story) => (
      <CommonLayout disableLayout={false}>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof VerificationChoicesComponents>;

const Template: ComponentStory<typeof VerificationChoicesComponents> = (
  args,
) => <VerificationChoicesComponents {...args} />;

export const Card = Template.bind({});

// Card.args = {
//   title: 'Card component',
//   placeholder: 'Enter your email here',
// };
