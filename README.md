# week4-file-upload-app

After git clone check that application can run :P

Run maven spring boot application on local host: 8081 ->>
1. mvn clean
2. mvn spring-boot:run

Deploy to heroku first time after app is made inn heroku->>
1.heroku git:remote -a (appname on huruko)
2.heroku buildpacks:clear
3.mvn clean heroku:deploy

Check terminal logs on heroku page:
heroku logs --tail