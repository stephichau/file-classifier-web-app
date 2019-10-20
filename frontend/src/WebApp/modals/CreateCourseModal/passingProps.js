import actions from '../../../store/actions';
import get from 'loadsh/get';

export default (props) => {
  const {
    courses: { POST_COURSE },
  } = actions;
  return {
    ...props,
    isSubmitting: get(props, `${POST_COURSE}.loading`) || false,
  };
}