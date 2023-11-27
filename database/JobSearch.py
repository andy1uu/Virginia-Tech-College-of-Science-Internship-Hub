import http.client
import json

conn = http.client.HTTPSConnection("jsearch.p.rapidapi.com")

headers = {
    'X-RapidAPI-Key': "8d856f5bf7msh564f981eb7b6326p1bd1bcjsn870d34e6c9f9",
    'X-RapidAPI-Host': "jsearch.p.rapidapi.com"
}

query="Chemistry%20Intern"

conn.request("GET", "/search?query="+query+"&page=1&num_pages=1", headers=headers)

res = conn.getresponse()
data = res.read()
response_data = json.loads(data.decode("utf-8"))
internships = response_data["data"]
print(internships)
# for internship in internships:
#   internship_title = internship["job_title"]
#   internship_description = internship["job_description"]
#   internship_company = internship["employer_name"]

#   print(internship_title)
#   print(internship_description)