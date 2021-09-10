# Build locally. Windows

Docker should be installed.


 
Run:  
docker build -t my-postgres-db ./  
docker run -d --name my-postgresdb-container -p 5432:5432 my-postgres-db  
cd ./backend  
npm i  
node index.js  
cd ../ui  
npm i  
ng serve
