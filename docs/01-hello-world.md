# 1st Practical Class: Hello World

## Atom Text Editor

We suggest [Atom](https://atom.io/) editor to be used.

You can use any editor you like, but:

- you should be able to edit remote files over SSH/SFTP,
- it should support modern JavaScript (ES2015+) and JSX syntax.

### Download Atom

- Go to [atom.io](https://atom.io/) and donwload latest version
  - if you are on school machine go to **Other platforms** link below the download button.
    Then select **atom-windows.zip** (this is version that does not require installer).
- run Atom and go to Settings:
  - on Windows select `File` > `Settings`
  - on Mac `Atom` > `Preferences...`
- in Settings in left panel select `+ Install` section and install [Recommended Atom Plugins](#recommended-atom-plugins).

### Recommended Atom Plugins

- [remote-ftp](https://atom.io/packages/remote-ftp)
- [language-babel](https://atom.io/packages/language-babel)

**After the installation of all plugins please quit and start the Atom again.**

### Setup Project Folder

Go to `File` > `Add Project Folder...`, create new empty folder and select it.

### Setup SFTP Connection

(this requires [project folder](#setup-project-folder))

Go to `Plugins` > `Remote-FTP` > `Create SFTP config file`.

This will open new `.ftpconfig` file with JSON configuration.
Change it to look like this (replace `USERNAME` with your username):

```json
{
  "protocol": "sftp",
  "host": "vse.handson.pro",
  "port": 22,
  "user": "USERNAME",
  "promptForPass": true,
  "remote": "/home/USERNAME/code/cviceni/",

  "agent": "",
  "privatekey": "",
  "passphrase": "",
  "hosthash": "",
  "ignorehost": true,
  "connTimeout": 10000,
  "keepalive": 10000,
  "keyboardInteractive": false,
  "watch": [],
  "watchTimeout": 500
}
```

**Save the `.ftpconfig` file.**

### Connect to SFTP

Go to `Plugins` > `Remote-FTP` > `Connect`. You will be asked about password to you server account (you have received it in an email).

Now you should see second tree view with files on server.

## Run Frontend on Your Local Machine

### Requirements

- [Git](https://git-scm.com/)
  - use of command line tool is suggested
- [Node.js v8.12.0](https://nodejs.org/)
  - use of [nvm - Node Version Manager](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) is suggested
    - this allows simple management of multiple Node.js versions on your compouter
    - to install 8.12.0 run `nvm install 8.12.0`
    - to use 8.12.0 run `nvm use 8.12.0` (this may be required each time you start new Terminal session)
  - if `nvm` is not your cup of tea, you can donwload it directly from [Node.js v8.12.0](https://nodejs.org/) site

### Clone Git Repo

Open Terminal or Command line and type: `git clone https://github.com/cngroupdk/vse-4it445.git`
