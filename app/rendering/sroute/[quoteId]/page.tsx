import { Quotes } from '@/app/lib/definitions';
import axios from 'axios';

export default async function Page({
  params,
}: {
  params: Promise<{ quoteId: string }>;
}) {
  const { quoteId } = await params;
  const quoteData: { data: Quotes } = await axios.get(
    `https://dummyjson.com/quotes/${quoteId}`,
    {
      headers: {
        cache: 'force-cache',
      },
    }
  );
  return (
    <div>
      <h1 className='text-xl font-bold'>Static Routes Rendering From SSG</h1>
      <span className='font-bold mt-4 mb-4'>
        Info : Use generateStaticParams and axios
      </span>
      <h1>Quote Info:</h1>
      <h1>Quote Id: {quoteData.data.id}</h1>
      <h1>Quote: {quoteData.data.quote}</h1>
      <h1>Quote Author: {quoteData.data.author}</h1>
    </div>
  );
}

export const generateStaticParams = async () => {
  const quotesData: { quotes: Quotes[] } = await fetch(
    'https://dummyjson.com/quotes',
    {
      cache: 'force-cache',
    }
  ).then((response) => response.json());
  return quotesData.quotes.map((quote) => ({
    quoteId: quote.id.toString(),
  }));
};
