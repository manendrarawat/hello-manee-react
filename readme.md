practice react

git init
git branch -M man
git add .
git commit -m 'intial commit'
git remote add origin 'origin details'
git push origin main


-------------
#####What is npm?
Ans: npm manages packages it does not stand for the node package manager. 

What is package.json
Ans Its a configuration for the npm.

What are the different type of bundler available?
Ans. webpack, parcel, veet

What is the difference between dev dependencies vs normal dependencies?
Ans. dev dependencies will not go with the prod bundle.

What is package-lock.json and its uses?
Ans package-lock.json keep track of the exact version of the package which we have installed 

What are transitive dependencies?
Ans If u installed some package. The  dependencies required by the dependent package is called as transitive dependencies.

How to run parcel?
Ans npx parcel index.html

What is difference between npm vs npx
Ans. npm: to install a package
     npx: executing a package

10. How to run app using parcel in dev and prod mode
Create dev build using parcel : npx parcel index.html
Create prod build using parcel : npx parcel build index.html

