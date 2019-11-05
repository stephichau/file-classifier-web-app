export const onNewCourse = ({
  i18n,
  setToastId,
  action,
  showCreateCourseModal,
  submitCreateCourseModal,
  loadToast,
}) => {
  showCreateCourseModal({
    title: i18n.createCourse.title,
    i18n,
    onSubmit: (props) => {
      const toastId = loadToast();
      submitCreateCourseModal(props);
      setToastId(toastId);
    },
    action,
  });
};

export const parseCoursesFromBackend = (courses, getSubtitle) => courses.map(course => ({
  title: course.name,
  subtitle: getSubtitle[course.name],
  id: course.uuid,
}));