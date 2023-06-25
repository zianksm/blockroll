import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommonLayout } from '@/components/layouts/CommonLayout';

import VerificationPopUp from './VerificationPopUp';

export default {
  title: 'components/Card',
  component: VerificationPopUp,
  decorators: [
    (Story) => (
      <CommonLayout disableLayout={false}>
        <Story />
      </CommonLayout>
    ),
  ],
} as ComponentMeta<typeof VerificationPopUp>;

const Template: ComponentStory<typeof VerificationPopUp> = (args) => (
  <VerificationPopUp {...args} />
);

export const Card = Template.bind({});

Card.args = {
  title: 'Verification Pop Up',
  desc: 'Kami telah mengirimkan tautan untuk merubah kata sandi ke email anda!',
  isEmail: false,
};
