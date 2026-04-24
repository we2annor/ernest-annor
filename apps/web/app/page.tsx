import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div className='text-center space-y-8'>
        <h1 className='text-6xl font-bold text-accent font-syne mb-4'>
          Ernest Annor
        </h1>
        <p className='text-xl text-text-muted mb-8'>Senior Software Engineer</p>
        <div className='flex gap-3 justify-center flex-wrap'>
          <Badge variant='accent'>React</Badge>
          <Badge variant='accent'>TypeScript</Badge>
          <Badge variant='blue'>Node.js</Badge>
          <Badge variant='pink'>GraphQL</Badge>
          <Badge variant='muted'>Docker</Badge>
        </div>
        <div className='flex gap-4 justify-center'>
          <Button variant='primary' size='lg'>
            View My Work
          </Button>
          <Button variant='outline' size='lg'>
            Contact Me
          </Button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Card hover>
          <h3 className='text-lg font-semibold text-text-primary font-syne mb-2'>
            NowTV Streaming Platform
          </h3>
          <p className='text-text-muted text-sm mb-4'>
            Large-scale consumer streaming application used by millions of users
            across web and TV devices.
          </p>
          <div className='flex gap-2 flex-wrap'>
            <Badge variant='accent'>React</Badge>
            <Badge variant='accent'>TypeScript</Badge>
            <Badge variant='blue'>GraphQL</Badge>
          </div>
        </Card>

        <Card hover>
          <h3 className='text-lg font-semibold text-text-primary font-syne mb-2'>
            Sky Glass Launch
          </h3>
          <p className='text-text-muted text-sm mb-4'>
            Key contributor to the launch of Sky Glass, delivering pay-TV
            directly to screens without a set-top box.
          </p>
          <div className='flex gap-2 flex-wrap'>
            <Badge variant='accent'>React</Badge>
            <Badge variant='pink'>Lightning</Badge>
            <Badge variant='muted'>Jenkins</Badge>
          </div>
        </Card>
      </div>
    </main>
  );
}
