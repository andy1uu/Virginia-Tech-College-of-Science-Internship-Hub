CREATE TABLE IF NOT EXISTS SKILLS (
  skillID INT NOT NULL AUTO_INCREMENT, 
  skillName VARCHAR(255) NOT NULL,
  PRIMARY KEY (skillID)
);

INSERT INTO SKILLS (SkillName) 
VALUES ('Python');