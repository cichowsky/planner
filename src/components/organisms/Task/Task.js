import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Icon from 'components/atoms/Icon/Icon';
import { SWrapper, SHeading, SDeadlineWrapper, SDeadline, SActions } from './Task.styles';

const Task = ({ title, description, deadline, priority = 1 }) => {
  return (
    <SWrapper priority={priority}>
      <SHeading as="h4">{title}</SHeading>
      <SDeadlineWrapper muted isSmall>
        <Icon icon="clock" />
        <SDeadline>{deadline}</SDeadline>
      </SDeadlineWrapper>
      <Paragraph mb0>{description}</Paragraph>

      <SActions>
        <input type="checkbox" /> {/* todo */}
      </SActions>
    </SWrapper>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  deadline: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired,
};

export default Task;
