import { ComponentMeta, ComponentStory } from '@storybook/react';

import PasswordStrenght from './PasswordStrength';

export default {
    title: 'feedback/PasswordStrenght',
    component: PasswordStrenght,
    argTypes: {},
} as ComponentMeta<typeof PasswordStrenght>;

const Template: ComponentStory<typeof PasswordStrenght> = (args) => (
    <PasswordStrenght {...args} />
);

export const Default = Template.bind({});
Default.args = {
    password: '',
};
