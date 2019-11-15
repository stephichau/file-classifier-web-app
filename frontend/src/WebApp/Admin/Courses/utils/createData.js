export default (
  index, { name: courseId, uuid, year, section, semester, instructor }, edit = 'editar', del = 'eliminar',
) => ({
  index,
  courseId,
  uuid,
  year,
  semester,
  section,
  instructor, edit,
  delete: del,
});
