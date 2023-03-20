Node.js, Fastify, React.js nested comments application using Prisma ORM and PostgreSQL

Clone application and inside server directory run

# npm i

And same for client directory. 

Create Database named "comments" inside PgAdmin

Upgrade DATABASE_URL according to your user, password and port inside server/.env

# DATABASE_URL="postgresql://[user]:[password]@localhost:[port]/comments"

Run next command for migrating PRISMA ORM inside server directory:

# npx prisma migrate dev

Then run this command for database seed:

# npx prisma db seed

Run next command for start server application:

# npm run dev

Then inside client directory run:

# npm run start

You will get this tab with 2 posts:

![0](https://user-images.githubusercontent.com/71104368/226365940-bd4710ad-bec5-4bcd-b2bd-222448493735.png)

Clicking on first one, you will visit this post and will see reddit-like nested comments

![1](https://user-images.githubusercontent.com/71104368/226366601-af09dcf8-6ca6-4b40-9ce0-b885bdea3f1a.png)

Comments can added, removed, edited, liked and replied

![2](https://user-images.githubusercontent.com/71104368/226366557-e9c46a52-26a3-41fe-9e04-40a5b1f53929.png)
