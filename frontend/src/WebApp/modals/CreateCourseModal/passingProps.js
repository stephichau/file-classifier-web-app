import get from 'loadsh/get';

export default (props) => {
  const action = get(props, 'action') || null;
  return {
    ...props,
    isSubmitting: get(props, `${action}.loading`) || false,
  };
}