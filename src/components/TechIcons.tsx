import clsx from 'clsx';
import * as React from 'react';
import {
  DiBootstrap} from 'react-icons/di';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiAmazonaws,
  SiApache,
  SiCodeigniter,
  SiCss3,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGoogleanalytics,
  SiGooglemeet,
  SiHtml5,
  SiJavascript,
  SiJirasoftware,
  SiJquery,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiMarkdown,
  SiMicrosoftteams,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPhp,
  SiPhpmyadmin,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiSlack,
  SiSwift,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWebgl,
  SiWordpress,
  SiZoom,
} from 'react-icons/si';
import {
  TbBrandThreejs,
} from 'react-icons/tb';

import Tooltip from '@/components/Tooltip';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <ul className={clsx(className, 'flex gap-2')}>
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} tipChildren={<p>{current.name}</p>}>
            <li className='text-xl text-gray-700 dark:text-gray-200'>
              <current.icon />
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
}

const techList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  scss: {
    icon: SiSass,
    name: 'SCSS',
  },
  javascript: {
    icon: SiJavascript,
    name: 'JavaScript',
  },
  typescript: {
    icon: SiTypescript,
    name: 'TypeScript',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  swr: {
    icon: IoLogoVercel,
    name: 'SWR',
  },
  redux: {
    icon: SiRedux,
    name: 'Redux',
  },
  mdx: {
    icon: SiMarkdown,
    name: 'MDX',
  },
  prettier: {
    icon: SiPrettier,
    name: 'Prettier',
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: 'Google Analytics',
  },
  git: {
    icon: SiGit,
    name: 'Git',
  },
  notion: {
    icon: SiNotion,
    name: 'Notion API',
  },
  swift: {
    icon: SiSwift,
    name: 'Swift',
  },
  php: {
    name: 'php',
    icon: SiPhp,
  },
  mysql: {
    name: 'mysql',
    icon: SiMysql,
  },
  laravel: {
    name: 'laravel',
    icon: SiLaravel,
  },
  wordpress: {
    name: 'wordpress',
    icon: SiWordpress,
  },
  symfony: {
    name: 'symfony',
    icon: SiSymfony,
  },
  linux: {
    name: 'linux',
    icon: SiLinux,
  },
  codeigniter: {
    name: 'codeigniter',
    icon: SiCodeigniter,
  },
  apache: {
    name: 'apache',
    icon: SiApache,
  },
  phpmyadmin: {
    name: 'phpmyadmin',
    icon: SiPhpmyadmin,
  },
  node: {
    name: 'node',
    icon: SiNodedotjs,
  },
  js: {
    name: 'js',
    icon: SiJavascript,
  },
  html: {
    name: 'html',
    icon: SiHtml5,
  },
  css: {
    name: 'css',
    icon: SiCss3,
  },
  jQuery: {
    name: 'jQuery',
    icon: SiJquery,
  },
  vuejs: {
    name: 'vuejs',
    icon: SiVuedotjs,
  },
  webgl: {
    name: 'webgl',
    icon: SiWebgl,
  },
  threejs: {
    name: 'threejs',
    icon: TbBrandThreejs,
  },
  bootstrap: {
    name: 'bootstrap',
    icon: DiBootstrap,
  },
  aws: {
    name: 'aws',
    icon: SiAmazonaws,
  },
  jira: {
    name: 'jira',
    icon: SiJirasoftware,
  },
  slack: {
    name: 'slack',
    icon: SiSlack,
  },
  msteams: {
    name: 'ms-teams',
    icon: SiMicrosoftteams,
  },
  googlemeet: {
    name: 'google-meet',
    icon: SiGooglemeet,
  },
  zoom: {
    name: 'zoom',
    icon: SiZoom,
  },
  kubernetes: {
    name: 'kubernetes',
    icon: SiKubernetes,
  },
  githubactions: {
    name: 'github-actions',
    icon: SiGithubactions,
  },
  docker: {
    name: 'docker',
    icon: SiDocker,
  },
};
