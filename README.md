Sinatra Skeleton
=============
HEROKU DEPLOYMENT READY VERSION
=============

## LOCAL DEV  -- Getting Started

1. `bundle install`
2. `shotgun -p 3000 -o 0.0.0.0`
3. Visit `http://localhost:3000/` in your browser


## HEROKU production -- Getting Started
1) Create a new github repo
2) Ensure you ran `bundle install` when setting up local dev, if not run it now
3) Add, commit, push to master on Github
4) Setup Heroku project/app
5) Add Heroku Remote address from the app creation (instructions on heroku)
6) git push heroku master
7) (required only if you setup a db migration already) - 

DB Setup:
from terminal in the project root run the following

heroku addons:add heroku-postgresql:dev

then

heroku run rake db:migrate

Your app should be live on ther heroku url now