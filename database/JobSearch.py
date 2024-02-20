# Import Statements.
import http.client
import json

# Establishes a connection to the JSearch API through Rapid API.
# https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch/
conn = http.client.HTTPSConnection("jsearch.p.rapidapi.com")

# Create an account on RapidAPI to get your own version of these, more details
# at the link above.
headers = {
    "X-RapidAPI-Key": "8d856f5bf7msh564f981eb7b6326p1bd1bcjsn870d34e6c9f9",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
}

# Specify the query that you want the API to search for.
# Note: Replace spaces with %20 because the API uses those for whitespace characters.
query = "Chemistry%20Intern"

# GET Request that searches the API with the query and headers that we specified.
conn.request("GET", "/search?query=" + query + "&page=1&num_pages=1", headers=headers)

# Stores the response.
response = conn.getresponse()

# Reads and stores the data from the response.
data = response.read()

# Decodes the response into a readable format.
response_data = json.loads(data.decode("utf-8"))

# Stores the json of internships that are stored in response.data.
internships = response_data["data"]
print(internships)

# TODO: Make it feed these jobs that it retrieves into the database based on
# if the user wants it to be added.
