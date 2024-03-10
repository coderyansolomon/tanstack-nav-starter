import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: Settings
})


function Settings(){
    return (
        <main>
            <h2>Hello from settings</h2>
        </main>
    )
}