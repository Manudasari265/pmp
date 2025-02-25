import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

if (!process.env.DATABASE_URL) {
    throw new Error("Database URL is missing in environment variables")
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

// import { drizzle } from 'drizzle-orm/neon-http';
// import { eq } from 'drizzle-orm';
// import { userTable } from './db/schema';
  
// export const db = drizzle(process.env.DATABASE_URL!);

// async function main() {
//   const user: typeof userTable.$inferInsert = {
//     name: 'John',
//     email: 'john@example.com',
//     password: "test-pasword",
//   };

//   await db.insert(userTable).values(user);
//   console.log('New user created!')

//   const users = await db.select().from(userTable);
//   console.log('Getting all users from the database: ', users)
//   /*
//   const users: {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//   }[]
//   */

//   await db
//     .update(userTable)
//     .set({
//       email: "dasari@gmail.com",
//     })
//     .where(eq(userTable.email, user.email));
//   console.log('User info updated!')

//   await db.delete(userTable)
//   .where(eq(userTable.email, user.email));
//   console.log('User deleted!')
// }

// main();