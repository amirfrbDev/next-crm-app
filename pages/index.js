import Link from "next/link"
import { useEffect, useState } from "react"

function Home() {



  return (
    <>
      <div>
        <p>To Create a new Post, Click Here:</p>
        <Link href={`/new-post`}>
          <button>New Post</button>
        </Link>
      </div>
    </>
  )
}





export default Home
