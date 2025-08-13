import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mods/stalker/$modFolder/$modId')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div className='bg-primary-dark'>Hello "/mods/stalker/$modFolder/mod/$modId"!</div>);
}
