import Rating from '@mui/material/Rating';
import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';
import { GoQuote } from 'react-icons/go';

import UnstyledLink from '@/components/links/UnstyledLink';

import { InjectedMeta, LibraryFrontmatter } from '@/types/frontmatters';

type LibraryCardProps = {
  snippet: LibraryFrontmatter & InjectedMeta;
} & React.ComponentPropsWithoutRef<'li'>;

export default function LibraryCard({ className, snippet }: LibraryCardProps) {
  return (
    <li
      className={clsx(
        'scale-100 hover:scale-[1.04] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
    >
      <UnstyledLink
        href={`${snippet.linkedin}`}
        className='block mt-8 h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
      >
        <div className='p-4 flex flex-col text-center sm:flex-row sm:text-left'>
          <div className='w-full sm:w-1/4'>
            <Image
              className='pointer-events-none rounded-full '
              src={`${snippet.ref_image}`}
              alt='Teammates'
              width="200px"
              height="200px"
            />
          </div>

          <div className='pl-4 w-full sm:w-3/4 flex flex-col justify-center items-center sm:items-start'>
            <p className='text-md italic text-gray-600 dark:text-gray-300'>
              <GoQuote/>{snippet.description}
            </p>
            <Rating className='mt-3' name="half-rating-read" defaultValue={snippet.rating} precision={0.1} readOnly />
            <p className='mt-8 text-gray-800 dark:text-gray-100'>{snippet.name}, {snippet.title}</p>            
          </div>
        </div>
      </UnstyledLink>
    </li>
  );
}
