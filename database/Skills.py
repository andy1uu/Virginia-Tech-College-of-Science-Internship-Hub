import http.client
import json

skillsFile = open("Skills.txt", "a")

conn = http.client.HTTPSConnection("auth.emsicloud.com")

payload = "client_id=i105vqmgxdkqydg5&client_secret=NAjmMcyV&grant_type=client_credentials&scope=emsi_open"

headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

conn.request("POST","/connect/token",body=payload, headers=headers)

res = conn.getresponse()
data = res.read()
response_data = json.loads(data.decode("utf-8"))
auth = response_data
print(auth)

conn = http.client.HTTPSConnection("emsiservices.com")

headers = {
  'Authorization': 'Bearer ' + auth['access_token']
}

conn.request("GET", "/skills/versions/latest/skills", headers=headers)

res = conn.getresponse()
data = res.read()
response_data = json.loads(data.decode("utf-8"))
skills = response_data
for skill in skills['data']:
  skillsFile.write(skill['name']+"\n")

skillsFile.close()