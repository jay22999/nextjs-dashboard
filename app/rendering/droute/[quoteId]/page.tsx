import { Quotes } from '@/app/lib/definitions';

export default async function Page({
  params,
}: {
  params: Promise<{ quoteId: string }>;
}) {
  const { quoteId } = await params;
  const quoteData: Quotes = await fetch(
    `https://dummyjson.com/quotes/${quoteId}`
  ).then((response) => response.json());
  return (
    <div>
      <h1 className='font-bold'>Dynamic Routes Rendering From SSR</h1>
      <h1>Quote Info:</h1>
      <h1>Quote Id: {quoteData.id}</h1>
      <h1>Quote: {quoteData.quote}</h1>
      <h1>Quote Author: {quoteData.author}</h1>
    </div>
  );
}
