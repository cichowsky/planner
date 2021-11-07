import Task from './Task';

export default {
  title: 'Components/Oragnisms/Task',
  component: Task,
  argTypes: {
    title: {
      defaultValue: 'Go shopping',
      control: 'text',
    },
    description: {
      defaultValue: 'Buy bread, milk and eggs',
      control: 'text',
    },
    deadline: {
      defaultValue: 'tomorrow',
      control: 'text',
    },
    priority: {
      defaultValue: 1,
      options: [0, 1, 2],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
