# attackflow_02
All .html file should place in public folder.

# node.js version
18.14.2, download here "https://nodejs.org/dist/v18.14.2/"

# MongoDB version
download here "https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.0-signed.msi" (for windows 64)

# MongoBD database setup for testing how-to
1. download MongoDB from https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.0-signed.msi
2. create/add database named attack_flow2 
3. run 
		
		npm install
	and then run 

		npm start 
4. go to http://localhost:3000/mongo_TEST if you see "Connected successfully to MongoDB", you have set the database up successful.

# Routes
## /home
http://localhost:3000/home
Main site page

## /download 
http://localhost:3000/download
download the latest file is stored in database collection called IncidentReportFile

## /upload 
http://localhost:3000/upload
uploads file "testing_files_to_upload/myFile.docx" and stores into database collection called IncidentReportFile
