import Input from './Input';

export default {
  title: 'Components/Atoms/Input/Input',
  component: Input,
};

const Template = (args) => <Input {...args} placeholder="type something" />;

export const Default = Template.bind({});
