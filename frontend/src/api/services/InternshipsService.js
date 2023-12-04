import baseAPI from "../api";

const create = (data) => {
  return baseAPI.post("/internships", data);
};

const getInternships = () => {
  return baseAPI.get("/internships");
};

const getInternshipById = (internshipId) => {
  return baseAPI.get(`/internships/${internshipId}`);
};

const updateInternshipById = (internshipId, data) => {
  return baseAPI.put(`/internships/${internshipId}`, data);
};

const removeInternshipById = (internshipId) => {
  return baseAPI.delete(`/internships/${internshipId}`);
};

const removeInternships = () => {
  return baseAPI.delete("/internships");
};

const InternshipsService = {
  create,
  getInternships,
  getInternshipById,
  updateInternshipById,
  removeInternshipById,
  removeInternships,
};

export default InternshipsService;
