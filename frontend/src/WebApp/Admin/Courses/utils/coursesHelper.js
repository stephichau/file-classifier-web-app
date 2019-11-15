export const onNewCourse = ({
  i18n,
  action,
  showCreateCourseModal,
  submitCreateCourseModal,
  hideModal,
}) => {
  showCreateCourseModal({
    title: i18n.createCourse.title,
    i18n,
    onSubmit: (props) => {
      submitCreateCourseModal(props);
      hideModal();
    },
    action,
  });
};