for starting project

```
install node
install npm
pacage.json => npm init
install mongoose
slugify => small library make a more readabl url from names
        => npm install slugify

install nodemon => npm install nodemon -save-dev
```

```
regular dependency and development dependency

devdependency => we use them to develop our application
```

####################################################

when uloading this project to github I faced two problems

1st- the content of the parent folder is uploded instead of the content of the folder containing the project, this problem is because of a git repository exists at a higher level (parent folder) and the solution is to remove this .git directory to disassociate it from Git
rm -rf ~/(parent directory)/.git

```
rm -rf ~/prog/Node.js/node-express-course/05-JWT-Basics/node-express-course/.git
```

.....................................................

2nd- when trying to start from an empty folder I face a problem:

```
git push -u origin master
error: src refspec master does not match any
error: failed to push some refs to 'https://github.com/aboAliAhmed/lel.git'
```

and the solution is to configure Git identity:

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

##################################
open mongo server

```
sudo mongod --fork --logpath /var/log/mongodb/mongod.log
```

to stop

```
sudo mongod --shutdown
```
