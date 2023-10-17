/* If you ever need to recreate the skills table */
DROP TABLE IF EXISTS SKILLS;
CREATE TABLE SKILLS (
  skillID INT NOT NULL AUTO_INCREMENT, 
  skillName VARCHAR(255) NOT NULL,
  PRIMARY KEY (skillID)
);

/* If you ever need to recreate the internships table */
DROP TABLE IF EXISTS INTERNSHIPS;
CREATE TABLE IF NOT EXISTS INTERNSHIPS (
  internshipID INT NOT NULL AUTO_INCREMENT, 
  internshipTitle VARCHAR(100) NOT NULL,
  internshipDescription VARCHAR(10000) NOT NULL,
  internshipCompany VARCHAR(100) NOT NULL,
  internshipLocation VARCHAR(100) NOT NULL,
  internshipStartDate VARCHAR(100) NOT NULL,
  internshipApplyDeadline VARCHAR(100) NOT NULL,
  internshipApplyLink VARCHAR(100) NOT NULL,
  internshipCitizenship VARCHAR(100) NOT NULL,
  internshipJobType VARCHAR(100) NOT NULL,
  PRIMARY KEY (internshipID)
);


/* If you ever need to recreate the students table */
DROP TABLE IF EXISTS STUDENTS;
CREATE TABLE IF NOT EXISTS STUDENTS (
  studentID INT NOT NULL, 
  studentName VARCHAR(100) NOT NULL,
  studentMajor VARCHAR(100) NOT NULL,
  PRIMARY KEY (studentID)
);

/* Inserting a value into the skills table */
INSERT INTO SKILLS (skillName) 
VALUES ('Python');

/* Inserting a value into the internships table */
INSERT INTO INTERNSHIPS (internshipTitle, internshipDescription, internshipCompany, internshipLocation, internshipStartDate, internshipApplyDeadline, internshipApplyLink, internshipCitizenship, internshipJobType) 
VALUES ('Behavioral Therapist Intern', 'This is an internship about behavioral therapists.', 'BetterHelp', 'Blacksburg, VA', '08/24/2024', '03/03/2024', 'www.betterhelp.com', 'US Citizen', 'Internship');

/* Inserting a value into the students table */
INSERT INTO STUDENTS (studentID, studentName, studentMajor) 
VALUES (906274349, 'Andy Luu', 'Computer Science');
