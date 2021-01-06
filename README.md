
## Installation
 1. npm install on package json- will download all npm modules 
 2. npm start  - will run the app 
 3. URL : GET <host>:3000/search?startTime=<timeStamp>&endTime=<timeStamp>
    EX: GET localhost:3000/search?startTime=1609321350&endTime=1609321444
## Requirements: 
  DB: 
1. install mongo DB or use existing one
2. specify the url to this DB in /config/deafult.json under DB.url node
3. create new database and put its name in /config/deafult.json under DB.dbName
4.create new collection and put its name in /config/deafult.json under DB.collectionName
5. upload the data from data.csv into the new collection you created

## Notes
* The link to the file will be present on the response
but the file created asynchronously ,so it can take some time to get it ready 
* File is marked with timestamp to avoid overwrite
* as part of the improvements we can reuse the files , cache them
  and not query the DB every time
