import Heading from './Heading';

export default {
  title: 'Components/Atoms/Heading',
  component: Heading,
  argTypes: {
    children: {
      name: 'Content',
      defaultValue: 'Hello world',
      control: 'text',
    },
  },
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});

export const Big = Template.bind({});
Big.args = {
  isBig: true,
};
