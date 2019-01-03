![picture](https://i.imgur.com/RxHJDTK.png)

# What is GreenHorn?

Hi there!
GreenHorn is great open source tool for your HR department. Let's try it :wink:

-----------
## How to run GreenHorn??
### Requirements :point_up:

You need to carry out these requirements:
- Node.js v8.9.4 or later
- `yarn`
#### You don't have yarn?
For those who need help with instalation:
```sh
npm install --global yarn
```
 ```sh
yarn install
```
- Sendgrid account -> sign up [here](https://sendgrid.com)
- Amazon Web Services S3 -> sign up [here](https://portal.aws.amazon.com/billing/signup?nc2=h_ct&src=header_signup&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start)
- Download and install latest Mysql(MariaDB) or Mamp/Xamp tool

**For getting credentials please go the the slack channel - team 9**

### Step 1 - Clone project
 1) Tap on the `Clone or download` button and download it to your computer


### Step 2 - Setup your database
1) Launch PHPMyAdmin
2) Create new DB
3) Go to project folder and Rename `.env.example` to `.env` and fill it with database config, Sendgrid secret key and Amazon S3 key.

### Step 3 - Run your local backend server
 In the terminal -> go to the backend folder and run:

 ```sh
 yarn
 ```
 and then
```sh
yarn dev
```

This should create table and associations in the DB and start server.

## Step 4 - Run your local frontend server

In the terminal -> go to the frontend folder and run:

```sh
yarn
```
and then
```sh
yarn start
```

## Step 5 - Try and enjoy GreenHorn :tada: :tada:

----------------

#### _For production_
Build your GreenHorn project and then deploy
```sh
yarn build
```
