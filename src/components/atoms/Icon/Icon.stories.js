import icons from 'assets/icons';
import Icon from './Icon';

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
  argTypes: {
    icon: {
      defaultValue: 'settings',
      options: Object.keys(icons),
      control: { type: 'radio' },
      description: 'Name same as svg file in assets/icons',
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
