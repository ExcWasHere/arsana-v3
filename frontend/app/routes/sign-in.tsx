import AuthCard from "../components/Auth/sign-in"; 
import type { Route } from "./+types/sign-in";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arsana | Sign-In" },
    { name: "Auth", content: "Welcome to Arsana!" },
  ];
}

export default function Login() {
  return <AuthCard />;
}