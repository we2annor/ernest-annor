import { Button } from "@/components/ui/Button";
export default function Home() {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <div className='text-center space-y-8'>
        <h1 className='text-6xl font-bold text-accent font-syne mb-4'>
          Ernest Annor
        </h1>
        <p className='text-xl text-text-muted mb-8'>Senior Software Engineer</p>
        <div className='flex gap-4 justify-center'>
          <Button variant='primary'>View Work</Button>
          <Button variant='outline'>Contact Me</Button>
          <Button variant='secondary'>Download CV</Button>
          <Button variant='ghost'>About</Button>
        </div>
        <div className='flex gap-4 justify-center'>
          <Button size='sm'>Small</Button>
          <Button size='md'>Medium</Button>
          <Button size='lg'>Large</Button>
        </div>
        <Button isLoading>Sending...</Button>
      </div>
    </main>
  );
}
