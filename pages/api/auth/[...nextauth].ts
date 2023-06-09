import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import GoogleProvider from 'next-auth/providers/google';
import clientPromise from '@/lib/api/mongodb';

// import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  providers: [
    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),
});
