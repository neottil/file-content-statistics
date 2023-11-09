# file-content-statistics
Counting words, letters, spaces, repeated words (at least 10 occurrences) in node.js

## How to use app with docker
- clone repository
- go into main project directory
- exec shell command to build docker image
```shell
docker build -t file-content-statistics .
```
- exec  shell command to run docker image
```shell
docker run -it --rm file-content-statistics
```
- type url or file path to get statistics (type "__tests__/testFile.txt" to use demo file)

if you want to analyze a file you can bind a volume and type filename in prompt when app is start.
```shell
docker run -it --rm -v FILE_TO_ANALYZE:/app/FILE_TO_ANALYZE file-content-statistics
```

## How to use wit node.js
- clone repository
- go into /app project directory
- exec shell command to run application
```shell
npm install
npm start
```

