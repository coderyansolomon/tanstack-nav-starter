import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$blogId/')({
  component: BlogPost
})

export default function BlogPost(){
    const params = Route.useParams()
    const blogId = params.blogId
    return(
        <main>
            <h2>Blog with id: {blogId}</h2>
        </main>
    )
}