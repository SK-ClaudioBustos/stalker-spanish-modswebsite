import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mods/stalker/clear-sky')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mods/clear-sky"!</div>
}
