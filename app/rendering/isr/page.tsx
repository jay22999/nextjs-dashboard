import Link from 'next/link';
import { Quotes } from '@/app/lib/definitions';

export const revalidate = 60;

const getQuotes = async () => {
  const quotes = await fetch('https://dummyjson.com/quotes', {
    cache: 'force-cache',
  }).then((response) => response.json());
  return quotes.quotes;
};

export default async function Page() {
  const quotesData = await getQuotes();
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-2xl'>
        Incremental Static Regeneration (ISR)
      </h1>
      <h1 className='font-bold'>List of Authors:</h1>
      {quotesData.map((quote: Quotes) => (
        <Link href='' key={quote.id}>
          {quote.author}
        </Link>
      ))}
    </div>
  );
}
