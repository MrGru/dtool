import { createFileRoute } from '@tanstack/react-router'
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";

export const Route = createFileRoute('/exicalidraw')({
  component: RouteComponent,
})

function RouteComponent() {
  return    <div className='h-full'>
        <Excalidraw />
      </div>
}
