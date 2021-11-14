import UserTemplate from 'components/templates/UserTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Task from 'components/organisms/Task/Task';
import GridTemplate from 'components/templates/GridTemplate';

const mockTasks = [
  {
    id: 'fgkjsdfhgsdfiw',
    title: 'Do pizza',
    description: 'do pepperoni pizza',
    deadline: '18:00',
    priority: 1,
  },
  {
    id: 'ghklfnkmscnasj',
    title: 'Go shopping',
    description: 'buy ingredients for dinner',
    deadline: '13:00',
    priority: 2,
  },
  {
    id: 'qwfovsffpcibif',
    title: 'Go to school',
    description: 'learn to exam',
    deadline: 'tomorrow',
    priority: 0,
  },
];

const ToDoView = () => {
  return (
    <UserTemplate>
      <Heading>To Do View</Heading>
      <GridTemplate>
        {mockTasks.map((task) => (
          <Task {...task} key={task.id} />
        ))}
      </GridTemplate>
    </UserTemplate>
  );
};

export default ToDoView;
