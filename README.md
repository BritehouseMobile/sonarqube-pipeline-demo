# Incorporating SonarQube into your CI/CD Pipeline

Currently this README is a shell with some basic notes. It will be fleshed out
to function as a self-explanatory tutorial in the near future.

TODO:
- Write an introduction to SonarQube and why it's a good idea to use it.

## Prerequisites
You should have the following installed locally:
- Docker
- Git
- Node.js

You should have access to Azure DevOps where you have permissions to
create or administer a project

You should have access to an instance of SonarQube or the ability
to install SonarQube on a server.

You should have permissions to generate a token on SonarQube for integration.

## Getting set up locally

### Installing SonarQube
Run the following to get SonqarQube community edition running on your machine:

```shell script
docker run -d --name sonarqube -p 9000:9000 sonarqube:8.2-community
```

You should now be able to view the SonarQube dashboard by going to 
go to [http://localhost:9000](http://localhost:9000)

You can log in with the username 'admin', and the password 'admin'

### Installing dependencies for this project

Run the following in the root of this project:

```shell script
npm install
```

### Running tests with a coverage report

This project has some simple tests written with Jest. SonarQube will use the
coverage report in its analysis.

Run the following in the root of this project:

```shell script
npm test:coverage
```

### Running SonarScanner
In the root of this project, run the following command:

```shell script
docker run -e SONAR_LOGIN=admin -e SONAR_PASSWORD=admin -e SONAR_PROJECT_BASE_DIR=local-config \
  --user="0:0" -it -v "$PWD:/usr/src" --rm --link sonarqube \
  sonarsource/sonar-scanner-cli
```

Or, if you're in a POSIX compliant environment with bash:

```shell script
chmod +x ./scan-local
./scan-local
```

When you navigate to [http://localhost:9000](http://localhost:9000), you should now see
an analysis of the project

## Configuring the pipeline

### Creating a project on Azure DevOps

TODO:
- Write a basic introduction
- Link to documentation (we can also include screenshots, but those run the risk of
  going out of date)
  
### Integrating Azure DevOps with GitHub
TODO:
- Write a basic introduction
- Link to documentation (we can also include screenshots, but those run the risk of
  going out of date)
  
### Integrating Azure DevOps with SonarQube with a token
TODO:
- Write a basic introduction
- Link to documentation (we can also include screenshots, but those run the risk of
  going out of date)
  
NOTES:
- generate token on sonarqube
    - user
    - my account
    - security
- link token on Azure DevOps 
    - project settings
    - service connections
    - new
    - sonarqube 
### Creating a pipeline with SonarScanner
We will be using the following tool:
[https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-azure-devops/](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-azure-devops/)

TODO:
- Write a basic introduction
- Link to documentation (we can also include screenshots, but those run the risk of
  going out of date)


## TODO

- Illustrate the differences between the different SonarQube editions
- We could expand this repo to include examples with different languages and frameworks
    used by Dimension Data, but it might be better to run those as separate examples
- Update the project to use Docker to install dependencies and run the tests

