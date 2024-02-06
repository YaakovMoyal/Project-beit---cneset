## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

Download or clone the project from this repo

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

#

### Installation redis

run the following command in new terminal

```
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
sudo chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
sudo apt-get update
sudo apt-get install redis-stack-server
```

- Enter your Linux's password

### Upload the redis

run the following command in ubuntu - wsl terminal

```
sudo redis-stack-server start
```

- Enter your Linux's password

#

#

## Running the server

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

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
