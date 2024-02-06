# Project---beit-cneset-back

## Description

This is a node & nest server with mongoose
for tfilot-times

#

#

#

## Tech Stack

**Server:** Node, NestJS, MongoDB, Redis, Json-web-token, bcryptjs ...

**Client:** Vite, React, React-router-dom, Redux, jwt-decode, Styled-Components ...

#

#

#

## Installation

Download or clone the project from this repo

for cloning from github enter the following command in the cmd / terminal in the folder

```
git clone https://github.com/YaakovMoyal/Project---beit-cneset-back.git
```

### Download the node_modules

Enter the "Project---beit-cneset-back" folder by typing the following command in the terminal/CMD in the project root folder

```
cd Project---beit-cneset-back
```

Enter the following command in the cmd / terminal in the root folder of this project

```
npm i
```

#

### Installation redis

run the following command in ubuntu - wsl terminal

```
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
sudo chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
sudo apt-get update
sudo apt-get install redis-stack-server
```

- Enter your Linux's password

### Running the redis

run the following command in ubuntu - wsl terminal

```
sudo redis-stack-server start
```

- Enter your Linux's password

#

### Running the server

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
- The page will reload if you make edits
- You should see the following text in the cmd / terminal

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

#

#

#
