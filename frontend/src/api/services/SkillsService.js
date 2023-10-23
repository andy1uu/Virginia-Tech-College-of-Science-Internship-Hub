import baseAPI from "../api";

const create = (data) => {
  return baseAPI.post("/skills", data);
};

const getSkills = () => {
  return baseAPI.get("/skills");
};

const getSkillById = (skillId) => {
  return baseAPI.get(`/skills/${skillId}`);
};

const updateSkillById = (skillId, data) => {
  return baseAPI.put(`/skills/${skillId}`, data);
};

const removeSkillById = (skillId) => {
  return baseAPI.delete(`/skills/${skillId}`);
};

const removeSkills = () => {
  return baseAPI.delete("/skills");
};

const SkillsService = {
  create,
  getSkills,
  getSkillById,
  updateSkillById,
  removeSkillById,
  removeSkills,
};

export default SkillsService;
