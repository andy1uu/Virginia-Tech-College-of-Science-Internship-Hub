import baseAPI from "../api";

const create = (data) => {
  return baseAPI.post("/students", data);
};

const getStudents = () => {
  return baseAPI.get("/students");
};

const getStudentById = (studentId) => {
  return baseAPI.get(`/students/${studentId}`);
};

const updateStudentById = (studentId, data) => {
  return baseAPI.put(`/students/${studentId}`, data);
};

const removeStudentById = (studentId) => {
  return baseAPI.delete(`/students/${studentId}`);
};

const removeStudents = () => {
  return baseAPI.delete("/students");
};

const StudentsService = {
  create,
  getStudents,
  getStudentById,
  updateStudentById,
  removeStudentById,
  removeStudents,
};

export default StudentsService;
