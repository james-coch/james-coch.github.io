import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import * as React from 'react';
import { BiPhone } from 'react-icons/bi';
import { IoArrowDownOutline } from 'react-icons/io5';
import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { InView } from 'react-intersection-observer';

import { trackEvent } from '@/lib/analytics';
import { getAllFilesFrontmatter, getFeatured } from '@/lib/mdx';
import { sortByDate } from '@/lib/mdx-client';
import { generateRss } from '@/lib/rss';
import useInjectContentMeta from '@/hooks/useInjectContentMeta';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
// import BlogCard from '@/components/content/blog/BlogCard';
import LibraryCard from '@/components/content/library/LibraryCard';
import ProjectCard from '@/components/content/projects/ProjectCard';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';
import Tooltip from '@/components/Tooltip';

export default function IndexPage({
  // featuredPosts,
  projects,
  featuredLibrary,
  // introPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const populatedPosts = useInjectContentMeta('blog', featuredPosts);
  // const populatedIntro = useInjectContentMeta('blog', introPosts);
  // const populatedProjects = useInjectContentMeta('projects', projects);
  const populatedLibrary = useInjectContentMeta('library', featuredLibrary);

  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo />

      <main>
        <section
          className={clsx(
            'min-h-main mt-16 flex flex-col justify-center',
            isLoaded && 'fade-in-start'
          )}
        >
          <div className='min-h-main' data-fade='1'>
            <div className='float-right w-1/2 md:w-1/3'>
              <Image
                data-fade='2'
                src='/images/james.png'
                width='306'
                height='450'
                alt='Photo of me'
              />
            </div>
            <article className='layout'>
            
            <h1 className='text-2xl md:text-4xl 2xl:text-5xl' data-fade='1'>
              Hi! I'm James
            </h1>
            <h2
              className='mt-6 text-3xl md:text-5xl 2xl:text-6xl'
              data-fade='2'
            >
              Friends call me <Accent>Jack</Accent>
            </h2>
            <h5
              className={clsx(
                'mt-6 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-16',
                'md:text-lg 2xl:text-xl'
              )}
              data-fade='3'
            >
              I've been working with LAMP stack for 5 years.<br/>
              I love helping businesses to build their ideas into real live website.
            </h5>
            <p
              className='mt-4 max-w-4xl leading-relaxed text-gray-700 dark:text-gray-200 md:mt-8 md:text-lg 2xl:text-xl'
              data-fade='4'
            >
            
              <UnstyledLink
                href='tel:19804476975'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
                onClick={() => {
                  trackEvent('Call', { type: 'link' });
                }}
              >
                <BiPhone className='shrink-0 ' />
                <Accent>Call me to hire NOW!</Accent>
              </UnstyledLink>
            </p>

            <div
              data-fade='5'
              className='mt-8 flex flex-wrap gap-4 md:!text-lg'
            >
              <div className='group relative'>
                <div
                  className={clsx(
                    'absolute -inset-0.5 animate-tilt rounded blur',
                    'bg-gradient-to-r from-primary-300 to-primary-400',
                    'dark:from-primary-200 dark:via-primary-300',
                    'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                  )}
                />
                <ButtonLink href='https://www.linkedin.com/in/james-coch/#recommendations'>Check out my references!</ButtonLink>
              </div>
              <ButtonLink href='mailto: james.coch97@gmail.com'>Contact to me via email!</ButtonLink>
            </div>
            <div
              data-fade='6'
              className='mt-12 flex flex-wrap gap-4 gap-y-2 md:mt-16'
            >
              <UnstyledLink
                href='James_Cochrane_LAMP.docx'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
                onClick={() => {
                  trackEvent('Social Link: Resume', { type: 'link' });
                }}
              >
                <IoNewspaperSharp className='shrink-0' />
                <span>Resume</span>
              </UnstyledLink>
              <UnstyledLink
                href='https://www.linkedin.com/in/james-coch/'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
                onClick={() => {
                  trackEvent('Social Link: Twitter', { type: 'link' });
                }}
              >
                <SiLinkedin className='shrink-0 transition-colors group-hover:text-[#1da1f2]' />
                <span>james-coch</span>
              </UnstyledLink>
              <UnstyledLink
                href='https://github.com/james-coch'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}
                onClick={() => {
                  trackEvent('Social Link: Github', { type: 'link' });
                }}
              >
                <SiGithub className='shrink-0' />
                <span>james-coch</span>
              </UnstyledLink>
            </div>
          </article>
          </div>

          <UnstyledLink
            href='#intro'
            className={clsx(
              'absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10',
              'cursor-pointer rounded-md transition-colors',
              'hover:text-primary-300 focus-visible:text-primary-300'
            )}
          >
            <IoArrowDownOutline className='h-8 w-8 animate-bounce md:h-10 md:w-10' />
          </UnstyledLink>
        </section>

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              id='intro'
              className={clsx('', inView && 'fade-in-start')}
            >
              <article
                className={clsx(
                  'layout flex flex-col-reverse items-center md:flex-row md:justify-start',
                  'md:gap-4'
                )}
                data-fade='0'
              >
                <div className='mt-8 h-full w-full md:mt-0'>
                  <h2 className='text-4xl md:text-6xl'>
                    <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                      Change your idea into live website!
                    </Accent>
                  </h2>
                  <div className='mt-4 text-base text-gray-600 dark:text-gray-300 md:text-lg'>
                    <Tooltip
                      withUnderline
                      tipChildren={
                        <>
                          Plus 2 years of extra <strong>experience</strong>
                        </>
                      }
                    >
                      <span>5 years of proven experience in LAMP stack</span>
                    </Tooltip>{' '}
                    will be a great support to build wesbite with PHP, Laravel, Symfony, MySQL and various{' '}
                    <strong className='text-gray-700 dark:text-gray-200'>JavaScript</strong>{' '}libraries.{' '}
                    I also love communication and team work with{' '}
                    <strong className='text-gray-700 dark:text-gray-200'>friends</strong>{' '}
                    and likes to learn new cutting edge techniques in my free time.
                  </div>
                </div>
              </article>
            </section>
          )}
        </InView>

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('pt-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='projects'>
                  <Accent>Technical Stack</Accent>
                </h2>
                <figure>
                  <TechStack />
                </figure>
              </article>
            </section>
          )}
        </InView>


        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('pt-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='projects'>
                  <Accent>Projects</Accent>
                </h2>
                <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3' data-fade='2'>
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                    />
                  ))}
                </ul>
                {/* <ButtonLink
                  className='mt-4'
                  href='/projects'
                  onClick={() =>
                    trackEvent('Home: See more project', { type: 'navigate' })
                  }
                >
                  See more project
                </ButtonLink> */}
              </article>
            </section>
          )}
        </InView>

        

        <InView triggerOnce rootMargin='-40% 0px'>
          {({ ref, inView }) => (
            <section
              ref={ref}
              className={clsx('py-20', inView && 'fade-in-start')}
            >
              <article className='layout' data-fade='0'>
                <h2 className='text-2xl md:text-4xl' id='library'>
                  <Accent>Testimonials</Accent>
                </h2>
                <ul className='mt-8 grid grid-cols-1 gap-4'>
                  {populatedLibrary.map((snippet, i) => (
                    <LibraryCard
                      key={snippet.slug}
                      snippet={snippet}
                      className={clsx(i > 3 && 'hidden sm:block')}
                    />
                  ))}
                </ul>
                {/* <ButtonLink
                  className='mt-4'
                  href='/library'
                  onClick={() =>
                    trackEvent('Home: See more snippets', { type: 'navigate' })
                  }
                >
                  See more snippets
                </ButtonLink> */}
              </article>
            </section>
          )}
        </InView>

        {/* <section>
          <div className='layout py-6'>
            <h2>Contact</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>Build your dream with me!</p>
            </article>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  // generateRss();

  // const blogs = await getAllFilesFrontmatter('blog');
  const projectsData = await getAllFilesFrontmatter('projects');
  const projects = getFeatured(sortByDate(projectsData), [
    'ventus',
  ]);
  const library = await getAllFilesFrontmatter('library');

  const featuredLibrary = getFeatured(library, [
    'marcelo-freitas',
    'zahra-ardalani',
    'andrew-riddles',
    'luke-r',
    'michael-coady',
  ]);

  // const introPosts = getFeatured(blogs, [
  //   'btb-flex-mental-model',
  //   'nextjs-fetch-method',
  // ]);

  return {
    // props: { featuredPosts, featuredProjects, featuredLibrary, introPosts },
    props: { projects, featuredLibrary },
  };
}
