import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
    return <div><Head><title>Homepage</title></Head>
    <main>
    <h1 className="title">
          Homepage
        </h1>
    <Link href="/">
          <a>Back to index</a>
    </Link>
    </main>
    <style jsx>{`
    main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

    `}</style>
    </div>
  }