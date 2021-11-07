import Paragraph from './Paragraph';

export default {
  title: 'Components/Atoms/Paragraph',
  component: Paragraph,
  argTypes: {
    children: {
      name: 'Content',
      defaultValue: 'Hello world',
      control: 'text',
    },
    isSmall: {
      defaultValue: false,
      control: 'boolean',
    },
    muted: {
      defaultValue: false,
      control: 'boolean',
    },
  },
};

const Template = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  isSmall: true,
};

export const Muted = Template.bind({});
Muted.args = {
  muted: true,
};
