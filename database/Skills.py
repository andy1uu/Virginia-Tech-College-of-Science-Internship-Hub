# Import Statements.
import http.client
import json

# Opens the Skills file.
skillsFile = open("Skills.txt", "a")

# Establishes a connection to the Authentication API through LightCast API.
# TODO: Find Link
conn = http.client.HTTPSConnection("auth.emsicloud.com")

# Create an account on LightCast API to get your own version of these, more
# details at the link above.
payload = "client_id=i105vqmgxdkqydg5&client_secret=NAjmMcyV&grant_type=client_credentials&scope=emsi_open"

# Specifies the content type.
headers = {"Content-Type": "application/x-www-form-urlencoded"}

# POST Request that searches the API with the query and headers that we specified.
conn.request("POST", "/connect/token", body=payload, headers=headers)

# Stores the response.
response = conn.getresponse()

# Reads and stores the data from the response.
data = response.read()

# Decodes the response into a readable format.
response_data = json.loads(data.decode("utf-8"))

# Grabs the auth info from the response data.
auth = response_data
print(auth)

# Establishes a connection to the Authentication API through LightCast API.
conn = http.client.HTTPSConnection("emsiservices.com")

# Uses the auth token from above.
headers = {"Authorization": "Bearer " + auth["access_token"]}

# GET Request that searches the API with the query and headers that we specified.
conn.request("GET", "/skills/versions/latest/skills", headers=headers)

# Stores the response.
response = conn.getresponse()

# Reads and stores the data from the response.
data = response.read()

# Decodes the response into a readable format.
response_data = json.loads(data.decode("utf-8"))

# Stores the json of skills that are stored in response_data.
skills = response_data

# Writes each skill to the txt file.
for skill in skills["data"]:
    skillsFile.write(skill["name"] + "\n")

# Closes the txt file.
skillsFile.close()
