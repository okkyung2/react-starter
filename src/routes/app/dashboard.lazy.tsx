import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/app/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/dashboard"!</div>
}
