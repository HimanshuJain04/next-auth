import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {

                const email = credentials.email;
                const password = credentials.password;



                return {
                    id: "user1"
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});


export const GET = handler;
export const POST = handler;

