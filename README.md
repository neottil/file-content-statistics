# file-content-statistics
Counting words, letters, spaces, repeated words (at least 10 occurrences) in node.js

## How to use app with docker
- exec  shell command to run docker image
```shell
docker run -it --rm ghcr.io/neottil/file-content-statistics:v1.0.0
```
- type url or file path to get statistics (type "__tests__/testFile.txt" to use demo file)

if you want to analyze a file you can bind a volume and type filename in prompt when app is start.
```shell
docker run -it --rm -v FILE_PATH:/app/FILENAME ghcr.io/neottil/file-content-statistics:v1.0.0
```
eg.: docker run -it --rm -v ./README.md:/app/README.md ghcr.io/neottil/file-content-statistics:v1.0.0

## How to use wit node.js
- clone repository
- go into /app project directory
- exec shell command to run application
```shell
npm install
npm start
```

