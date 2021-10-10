import Head from 'next/head'
import Link from 'next/link'
import './login.css'

export default function FirstPost() {
    return <div className = "login"><head>
      <title>Login</title>
      </head>
    <main>
    <h1 className="title">
          Welcome to study buddy
        </h1>
        
    <Link href="/">
          <a>Back to index</a>
    </Link>
    </main>
    </div>
  }