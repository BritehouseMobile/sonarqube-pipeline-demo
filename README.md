# Incorporating SonarQube into your CI/CD Pipeline

TODO: 
Document
- Intro to SonarQube
- Creating app service plan on Azure
- Creating a pipeline on Azure Devops 


run
```bash
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube:8.2-community
```

go to localhost:9000

admin admin

run
```bash
docker run -ti -v $(pwd):/usr/src --link sonarqube newtmitch/sonar-scanner
```

https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-azure-devops/
