interface Post {
  id: string
  body: string
  author: User
}

interface User {
  id: string
  name: string
}

let posts: Post[] = [
  {
    id: "post-1",
    body: "Something great",
    author: { id: "author-1", name: "Jim" },
  },
  {
    id: "post-2",
    body: "Something else",
    author: { id: "author-2", name: "Kamil" },
  },
  {
    id: "post-3",
    body: "Say what?",
    author: { id: "author-3", name: "Jasper" },
  },
]
