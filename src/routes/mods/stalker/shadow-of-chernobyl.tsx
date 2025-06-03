import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mods/stalker/shadow-of-chernobyl')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mods/stalker/shadow-of-chernobyl"!</div>
}
