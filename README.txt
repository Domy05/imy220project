# Docker Usage for This Project

## Build the Docker image
```
docker build -t imy220-app .
```

## Run the Docker container
```
docker run -p 5000:5000 imy220-app
```

- The app will be accessible at http://localhost:5000
- Make sure you have Docker Desktop running
- If you make changes to the code, rebuild the image

## Useful Docker Commands
- List running containers: `docker ps`
- Stop a container: `docker stop <container_id>`
- Remove a container: `docker rm <container_id>`
- Remove an image: `docker rmi imy220-app`


to run the server use npm start

to run the react thingie use npm start
i think

u must cd fronted to run these command
 npm run build       did this..
 then did npm start         also for react frontend



docker run -p 5000:5000 imy220-app		this is to run the docker thing
if an error shows then change the port number.
the site must still be localhost 5000 wara wara