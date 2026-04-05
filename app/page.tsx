import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className='flex'>
        <Link href="/">Home</Link>

        <Link href="/review_movies">Review Movies</Link>
    </div>
      <div> 
        
      </div>
    </div>
  );
}
