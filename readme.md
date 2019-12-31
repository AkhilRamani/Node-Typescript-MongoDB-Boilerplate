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

## Project Structure

	 - src/
		 - Controllers/
			 - User/
				 - User.Controller.ts
			 - index.ts
		 - Repository/
			 - User/
				 - User.Repository.ts
			 - index.ts
		 - Schema/
			 - User/
				 - User.Schema.ts
				 - User.Typedef.ts
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
   per below **<*collection_name*>.Schema.ts**

- Defile Type Definition in **<*collection_name*>.Typedef.ts** file.
- Create folders as per your collection_name in Controllers, Repository folders.
- Do not write DB interection logic outside **Repository** folder.
- Export every module through **index.ts** file.
- Create new Routes inside **routes.ts** file.
- Use **.env** file for private static variables.


## Contributing
Better approach and Pull requests are welcomed. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)

#### Regards

> **Akhil Ramani**	[Linkedin](https://www.linkedin.com/in/akhil-ramani-630b51150)