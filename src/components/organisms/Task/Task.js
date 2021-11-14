import { useState } from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Icon from 'components/atoms/Icon/Icon';
import Checkbox from 'components/atoms/Input/Checkbox/Checkbox';
import { SWrapper, SHeading, SDeadlineWrapper, SDeadline, SActions } from './Task.styles';

const Task = ({ title, description, deadline, priority = 1, done = false }) => {
  const [isDone, setIsDone] = useState(done);
  return (
    <SWrapper priority={priority}>
      <SHeading as="h4">{title}</SHeading>
      <SDeadlineWrapper muted isSmall>
        <Icon icon="clock" />
        <SDeadline>{deadline}</SDeadline>
      </SDeadlineWrapper>
      <Paragraph mb0>{description}</Paragraph>

      <SActions>
        <Checkbox checked={isDone} onChange={() => setIsDone(!isDone)} />
      </SActions>
    </SWrapper>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  deadline: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired,
  done: PropTypes.bool,
};

export default Task;
