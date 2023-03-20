import { useAsync } from "../hooks/useAsync"
import { getPosts } from "../services/posts"

export function PostList() {
    const { loading, error, value: posts } = useAsync(getPosts)

    if(loading) return <h1>Loading</h1>
    if(error) return <h1 className="errror-msg">{error}</h1>

    return posts.map(post => {
        return (
            <a href={`/posts/${post.id}`}>
                <div className="post">
                    <h1 className="post-title" key={post.id}>{post.title}</h1>
                    <article className="post-body">{post.body}</article>
                </div>
            </a>
        )
    })
}