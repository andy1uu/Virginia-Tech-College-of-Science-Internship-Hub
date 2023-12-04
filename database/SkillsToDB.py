import http.client
import json
import time
import mysql.connector


mydb = mysql.connector.connect(
  host ="db.cs.vt.edu",
  user="andyluu",
  password="cosInternshipDB4230",
  database="andyluu_cosinternshipdb",
)
 
# Printing the connection object 
cursor = mydb.cursor()
      
skillsFile = open("Skills.txt", "r")
#skillsFile = ["communications\n"]

for skillName in skillsFile:
  print("Skill:" + skillName)

  cursor.execute('INSERT INTO SKILLS (skillName) VALUES ("'+skillName.strip()+'")')

  mydb.commit()


cursor.close()
mydb.close()