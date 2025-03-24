import Link from 'next/link';
import { Quotes } from '@/app/lib/definitions';
import { Suspense, use } from 'react';

const GetQuotes = () => {
  const quotes = use(
    fetch('https://dummyjson.com/quotes', {
      cache: 'no-store',
    }).then((response) => response.json())
  );

  const quotesData = quotes.quotes;

  return (
    <div className='flex flex-col'>
      <h1 className='font-bold'>List of Authors:</h1>
      {quotesData.map((quote: Quotes) => (
        <Link href='' key={quote.id}>
          {quote.author}
        </Link>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-2xl'>Streming/Progressive Rendering</h1>
      <Suspense fallback={<h1 className='text-2xl'>Loading....</h1>}>
        <GetQuotes />
      </Suspense>
    </div>
  );
}
