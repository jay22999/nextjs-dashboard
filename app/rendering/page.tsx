import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex flex-col m-4'>
      <h1 className='font-bold'>Rendering</h1>
      <ol className='mx-5 list-decimal'>
        <li>Static Rendering</li>
        <ol className='list-disc m-6'>
          <li>
            <Link href='/rendering/ssg'>Static Site Generation (SSG)</Link>
          </li>
          <li>
            <Link href='/rendering/isr'>
              Incremental Static Regeneration (ISR)
            </Link>
          </li>
        </ol>
        <li>Dynamic Rendering</li>
        <ol className='list-disc m-6'>
          <li>
            <Link href='/rendering/ssr'>Server Side Rendering (SSR)</Link>
          </li>
          <li>
            <Link href='/rendering/pg'>Streming/Progressive Rendering</Link>
          </li>
          <li>
            <Link href='/rendering/csr'>Client Side Rendering (CSR)</Link>
          </li>
        </ol>
      </ol>
    </div>
  );
}
