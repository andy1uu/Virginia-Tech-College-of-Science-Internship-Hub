# Import Statements.
import mysql.connector

# Connects to the database.
mydb = mysql.connector.connect(
    host="db.cs.vt.edu",
    user="andyluu",
    password="cosInternshipDB4230",
    database="andyluu_cosinternshipdb",
)

# Printing the connection object.
cursor = mydb.cursor()

# Opens the skills txt file.
skillsFile = open("Skills.txt", "r")

# Commits each skill into the database.
for skillName in skillsFile:
    print("Skill:" + skillName)

    cursor.execute(
        'INSERT INTO SKILLS (skillName) VALUES ("' + skillName.strip() + '")'
    )

    mydb.commit()

# Closes the connections to the database and the skills txt file.
skillsFile.close()
cursor.close()
mydb.close()
