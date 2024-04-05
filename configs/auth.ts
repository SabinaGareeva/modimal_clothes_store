import type { AuthOptions, User } from "next-auth";
import GoggleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
async function getUsers() {
  try {
    const response = await axios.get("http://localhost:3000/users");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log("Ошибка получения всех пользователей", error);
  }
}
// Конфиги для авторизации
export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const users = await getUsers();
        const currentUser = users.find(
          (user: any) => user.email == credentials.email
        );
        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPassword } = currentUser;
          // @ts-ignore
          return userWithoutPassword as User;
        }
        return null;
      },
    }),
  ],
  // Позволяет выводить дополнительно id и role зарегистрированного пользователя
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // @ts-ignore
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        // @ts-ignore
        session.user.id = token.sub;
        // @ts-ignore
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/LogIn",
  },
};
