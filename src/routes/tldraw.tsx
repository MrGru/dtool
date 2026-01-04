import { createFileRoute } from '@tanstack/react-router'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export const Route = createFileRoute('/tldraw')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='h-full'>
			<Tldraw />
		</div>
}
