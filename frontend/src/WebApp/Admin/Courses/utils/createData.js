export default (
  index, courseId, courseName, year, section, semester, instructor, edit = 'editar', del = 'eliminar',
) => ({
  index,
  courseId,
  courseName,
  year,
  semester,
  section,
  instructor, edit,
  delete: del,
});
