import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    children: {
      name: 'Content',
      defaultValue: 'Add',
      control: 'text',
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  isSmall: true,
};
