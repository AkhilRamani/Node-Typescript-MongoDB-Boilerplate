# Node-Typescript-MongoDB-Boilerplate

A template starter code setup for good project setup and workflow for writing Nodejs apps in Typescript with MongoDB.

## Prerequisites

 - Install Node.js
 - Install MongoDB
 - Install [nodemon](https://www.npmjs.com/package/nodemon)

## Getting started

 - Clone the repository.
```bash
git clone https://github.com/AkhilRamani/Node-Typescript-MongoDB-Boilerplate.git <Project_Name>
```
 - Install dependencies
```bash
cd <Project_Name>
npm install
```
 - Add your MongoDB url in **.env** file
```
MONGODB_URI=<Your_MongoDB_URL>
```
 - Running app during development phase
```bash
npm run watch-ts	#buils and watch for .ts file changes
npm run watch-node	#starts node server and watch for changes in .js file 
```

## Project Structure

	- src/
	  - common/
	    - exceptions.common.ts
	    - utils.common.ts 
	  - controllers/
	    - user/
	      - user.controller.ts
	    - index.ts
	  - repository/
	    - user/
	      - user.repository.ts
	    - index.ts
	  - schema/
	    - user/
	      - user.schema.ts
	      - user.typedef.ts
	    - index.ts
	  - app.ts
	  - routes.ts
	  - server.ts
	- .env
	- .gitignore
	- package.json
	- tsconfig.json
	- tslint.json 


## Usage Rules

 - Defile schema of required collection in Schama file and give name as
   per below **<*collection_name*>.schema.ts**

- Defile Type Definition of Model in **<*collection_name*>.typedef.ts** file.
- Create folders as per your collection_name in Controllers, Repository folders.
- Do not write DB interection logic outside **repository** folder.
- Export every module through **index.ts** file.
- Create new Routes inside **routes.ts** file.
- Use **.env** file for private static variables.
- Create http errors and exceptions in **exceptions.common.ts** file.
- Use **utils.common.ts** file to define utility functions.


## Contributing
Better approach and Pull requests are welcomed. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)

#### Regards

> **Akhil Ramani**	[Linkedin](https://www.linkedin.com/in/akhil-ramani-630b51150)