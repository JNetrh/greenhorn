# 2nd Practical Class: React Basics and React Router

## Git setup at the virtual machine

1. check/correct your git settings

```bash
git config --list
git config --global user.name "User Name"
git config --global user.email "username@example.com"
```

2. initialize git repository

```bash
cd code/cviceni
git init
```

### add upstream repository

```bash
git remote add cngroup https://github.com/cngroupdk/vse-4it445.git
```

## Git basics

```bash
git status

git checkout -b <the-branch-name>


git add .

git commit

git log
```

### How to reset to current practice branch

```bash
git fetch --all

git checkout -b my-practice-02

git reset --hard cngroup/practical-02
```

## setup git for your remote - USERNAME@vse.handson.pro (if you'd like to commit)

### using fork and sshkey

go to https://github.com/cngroupdk/vse-4it445 and fork the repository to your github

create ssh key on virtual machine

1. check if you already have keys

```bash
ls -al ~/.ssh
```

if `id_rsa.pub` exists go to step 3.

2. generate an ssh key

```bash
ssh-keygen
```

3. go to https://github.com/settings/keys `new ssh key`
   copy the key

```bash
vim ~/.ssh/id_rsa.pub
```

paste and add some descriptive name. Save

```bash
git remote add origin <git@github.com:GITHUBUSERNAME/vse-4it445.git>

git checkout <branch-name>

git push --set-upstream origin <branch-name>
```

## (optional) add ssh key

you can add your ssh key to server so you don't have to use password every time you connect

1. check if you already have keys

```bash
ls -al ~/.ssh
```

if `id_rsa.pub` exists go to step 3.

2. generate an ssh key

```bash
ssh-keygen
```

3. add the key to server

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub USERNAME@vse.handson.pro
```

## Firefox Plugins

- [React Developer Tools](https://addons.mozilla.org/en-us/firefox/addon/react-devtools/)

## Used NPM Packages

- [Bootstrap](http://getbootstrap.com/)
- [classnames](https://github.com/JedWatson/classnames)
- [react-router](https://github.com/ReactTraining/react-router)

## Practical Tasks

- Go trough ES6 Basics
- Go trough Git Basics and add ssh keys
- Basic components & package installation (`<Price />`, `<FontIcon />`, [`@fortawesome/fontawesome-free`](https://www.npmjs.com/package/@fortawesome/fontawesome-free))
- Page (`<ProductDetail />`, `<ContactDetail/>`)
- Routing (Connect `ContactDetail` to routes via `ID`)
- (advanced) Try to fetch contact data from api (use axios and `https://jsonplaceholder.typicode.com/users/`)
- (advanced) Use the fetched data in app state.
