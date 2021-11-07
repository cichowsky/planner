import icons from 'assets/icons';
import ButtonIcon from './ButtonIcon';

export default {
  title: 'Components/Atoms/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    icon: {
      defaultValue: 'settings',
      options: Object.keys(icons),
      control: { type: 'radio' },
      description: 'Name same as svg file in assets/icons',
    },
  },
};

const Template = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});

export const Indicated = Template.bind({});
Indicated.args = {
  indicated: true,
  className: 'active',
};
