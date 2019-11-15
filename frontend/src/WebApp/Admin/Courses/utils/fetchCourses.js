import get from 'loadsh/get';

const shouldFetchCourses = ({
  courseState,
}) => {
  const fetchedCourses = get(courseState, 'payload', undefined);
  const loading = get(courseState, 'loading') || false;
  return (typeof fetchedCourses === 'undefined' && !loading);
};


export default shouldFetchCourses;
