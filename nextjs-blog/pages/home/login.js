import Link from 'next/link'
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";

export default function FirstPost() {
    return <div className = "login">
    <h1 className="title">
          Welcome to study buddy
        </h1>
        
    <Link href="/">
          <a>Back to index</a>
    </Link>
        <LoginButton/>
        <LogoutButton/>
    </div>
  }
