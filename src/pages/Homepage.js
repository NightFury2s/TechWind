import SignupForm from "./Signup/signup"
import LoginForm from "./Login/login"
import Navbar from "../components/navbar"

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <SignupForm />
      <LoginForm />
    </div>
  )
}
