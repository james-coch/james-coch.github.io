import { FeedbackFish } from '@feedback-fish/react';
import * as React from 'react';
import { BiPhone } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { trackEvent } from '@/lib/analytics';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import Accent from '@/components/Accent';
import Spotify from '@/components/layout/Spotify';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

import { feedbackFlag, spotifyFlag } from '@/constants/env';

export default function Footer() {
  return (
    <footer className='mt-4 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-6 dark:border-gray-600'>
        {/* <FooterLinks /> */}

        {spotifyFlag && <Spotify className='mt-8' />}

        <h1 className='mt-6 mb-6 font-medium text-gray-600 dark:text-gray-300'>Build your dream with me!</h1>
        <SocialLinks />

        <p className='mt-6 mb-6 text-md text-gray-600 dark:text-gray-300'>
          Copyright © James Cochrane {new Date().getFullYear()}
          {feedbackFlag && (
            <>
              {' • '}
              <FeedbackFish
                projectId={process.env.NEXT_PUBLIC_FEEDBACK_FISH_ID || ''}
              >
                <button className='rounded-sm hover:text-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 dark:hover:text-gray-100'>
                  Got any feedback?
                </button>
              </FeedbackFish>
            </>
          )}
        </p>
      </main>
    </footer>
  );
}

function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied'>('idle');

  const [copy] = useCopyToClipboard();

  return (
    <div className='mt-2 flex space-x-4'>
      <div className='flex items-center justify-center'>
        <Tooltip
          trigger='mouseenter'
          hideOnClick={false}
          interactive
          html={
            <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
              {copyStatus === 'idle'
                ? 'Click to copy mail address '
                : 'Copied to clipboard 🥳' }
              <Accent className='inline-block font-medium'>
                james.coch97@gmail.com
              </Accent>
            </div>
          }
        >
          <button
            onClick={() => {
              copy('james.coch97@gmail.com').then(() => {
                setCopyStatus('copied');
                setTimeout(() => setCopyStatus('idle'), 1500);
              });
            }}
            className='rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          >
            <FiMail className='h-16 w-16 align-middle text-gray-600 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </button>
        </Tooltip>
      </div>
      {socials.map((social) => (
        <Tooltip
          interactive={false}
          key={social.href}
          tipChildren={social.text}
        >
          <UnstyledLink
            className='inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
            href={social.href}
            onClick={() => {
              trackEvent(`Footer Link: ${social.id}`, { type: 'link' });
            }}
          >
            <social.icon className='my-auto h-16 w-16 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </UnstyledLink>
        </Tooltip>
      ))}
    </div>
  );
}

type Social = {
  href: string;
  icon: IconType;
  id: string;
  text: React.ReactNode;
};
const socials: Social[] = [
  {
    href: 'tel:19804476975',
    icon: BiPhone,
    id: 'Phone',
    text: (
      <>
        Call me now {' '}
        <Accent className='font-medium'>+1 (980) 447-6975</Accent>
      </>
    ),
  },
  {
    href: 'https://github.com/james-coch',
    icon: SiGithub,
    id: 'Github',
    text: (
      <>
        See my projects on <Accent className='font-medium'>Github</Accent>
      </>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/james-coch',
    icon: SiLinkedin,
    id: 'Linkedin',
    text: (
      <>
        Find me on <Accent className='font-medium'>Linkedin</Accent>
      </>
    ),
  },
];
