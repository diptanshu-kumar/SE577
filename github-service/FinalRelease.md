# Github Service

Microservice for Github Repo Queries

## Steps to run the project

1. Get a personal token for your github account.
2. For the service to read your token; you must perform one of the following actions:
   - Update the `github-service/app.yaml` file, add new key/value `githubAccessToken:<your-personal-token>`
3. Also, update 'githubUsername' key in app.yaml to your github user name
4. Install all the dependencies using `npm install` commands:

npm install axios
npm install js-yaml
npm install cors
npm install express

### Run the service without Docker

To start server, run the command below from the `github-service` directory:
Navigate to `github-service` directory and run `npm start` to start the service on port mentioned in app.yaml, default port is 7500

### Run the service with Docker

Build docker image using below command:

```
docker build -t github-service .
```
Run the image created using command:

```
docker run -dp 7500:7500 github-service
```
You can check the status of container on Docker app, container status should show as `running`

## To start the UI
Navigate to proj-release-2 directory on terminal and run `npm install -g @quasar/cli` command. 
Once done, run   `yarn quasar dev` to launch application. If terminal shows error like `quasar command not found`, run this command `npm link @quasar/cli` followed by `yarn quasar dev` again to launch the UI on browser (If not launching automatically, try opening URL http://localhost:8080)