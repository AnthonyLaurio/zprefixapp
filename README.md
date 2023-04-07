Visit the deployed site at https://anthonylcrudapp.onrender.com/
If the site is not loading at first try refreshing and waiting a minute. 
The site is hosted on Render's free tier which spins down the server after not being used for a while.
It should automatically spin back up when you visit the site.

**How to Start Locally
1. In the server folder, rename the file '.envcopy' to '.env'
2. In the client folder, rename the file '.envcopy' to '.env'
1. Ensure you have Docker installed and running
2. In the zprefixapp directory, run `docker-compose up`
3. Navigate to localhost:3000 in your browser
4. To stop the server, run `docker-compose down`

**How to Use
1. As a visitor, you can view all of inventory on the homepage
2. You can click on any item to view its full details
3. Click login to either login or create a new account; You can login with `admin1` and `password` as a test account
4. Once logged in you will be redirected to your personal inventory
5. In the personal inventory you can only see items you have added yourself.
6. In the personal inventory you can add, edit, or delete items.
7. You can also view all items in the database by navigating to the homepage using the website title.
