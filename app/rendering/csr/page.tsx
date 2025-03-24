'use client';

import Link from 'next/link';
import { Quotes } from '@/app/lib/definitions';
import { useEffect, useState } from 'react';

export default function Page() {
  const [quotesData, setquotesData] = useState([]);
  useEffect(() => {
    const getQuotes = async () => {
      const quotes = await fetch('https://dummyjson.com/quotes').then(
        (response) => response.json()
      );
      setquotesData(quotes.quotes);
    };
    getQuotes();
  }, []);
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-2xl'>Client Side Rendering (CSR)</h1>
      <h1 className='font-bold'>List of Authors:</h1>
      {quotesData.map((quote: Quotes) => (
        <Link href='' key={quote.id}>
          {quote.author}
        </Link>
      ))}
    </div>
  );
}
