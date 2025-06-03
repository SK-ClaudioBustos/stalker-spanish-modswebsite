import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mods/stalker/call-of-pripyat')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mods/stalker/call-of-pripyat"!</div>
}
