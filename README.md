Visit the deployed site at https://anthonylcrudapp.onrender.com/

**How to Start Locally
1. In the server folder, rename the file '.envcopy' to '.env'
2. In the client folder, inside app.js change the URL on line 11 to `http://localhost:3001`. Currently it will use the deployed database if you don't change it.
1. Ensure you have Docker installed and running
2. In the zprefixapp directory, run `docker-compose up`
3. Navigate to localhost:3000 in your browser
4. To stop the server, run `docker-compose down`

**How to Use
1. As a visitor, you can view all of inventory on the homepage
2. You can click on any item to view its full details
3. Click login to either login or create a new account
4. Once logged in you will be redirected to your personal inventory
5. In the personal inventory you can only see items you have added yourself.
6. In the personal inventory you can add, edit, or delete items.
7. You can also view all items in the database by navigating to the homepage using the website title.
