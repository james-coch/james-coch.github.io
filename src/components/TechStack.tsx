import clsx from 'clsx';
import * as React from 'react';
import {
  DiBootstrap} from 'react-icons/di';
import {
  SiAmazonaws,
  SiApache,
  SiCodeigniter,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGooglemeet,
  SiHtml5,
  SiJavascript,
  SiJirasoftware,
  SiJquery,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiMicrosoftteams,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPhpmyadmin,
  SiReact,
  SiSlack,
  SiSymfony,
  SiTypescript,
  SiVuedotjs,
  SiWebgl,
  SiWordpress,
SiZoom} from 'react-icons/si';
import {
  TbBrandThreejs,
} from 'react-icons/tb';

import Accent from '@/components/Accent';
import CustomLink from '@/components/links/CustomLink';
import Tooltip from '@/components/Tooltip';

export default function TechStack() {
  return (
    <div className='flex flex-wrap justify-center sm:justify-normal'>
      {stacks.map((tech) => (
        <Tooltip key={tech.id} tipChildren={<p>{tech.tooltip}</p>}>
          <tech.icon
            key={tech.id}
            className={clsx(
              'h-10 w-10 md:h-16 md:w-16 mx-5 my-5',
              'text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300',
              'transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'php',
    icon: SiPhp,
    tooltip: (
      <>
        <CustomLink href='https://www.php.net/'>PHP</CustomLink>, my main language.
        It's popular open-source server-side script for web development since <Accent>Rasmus Lerdorf</Accent> designed it in 1995.
      </>
    ),
  },
  {
    id: 'mysql',
    icon: SiMysql,
    tooltip: (
      <>
        <CustomLink href='https://www.mysql.com/'>MySQL</CustomLink>, most widely used open-source RDBMS created by <Accent>Michael Widenius</Accent> and <Accent>David Axmark</Accent> in 1995, which I love to use.
      </>
    ),
  },
  {
    id: 'laravel',
    icon: SiLaravel,
    tooltip: (
      <>
        <CustomLink href='https://laravel.com/'>Laravel</CustomLink>, free and open-source PHP web framework created by <Accent>Taylor Otwell</Accent> in 2011
        and loved by millions of developers including me.
      </>
    ),
  },
  {
    id: 'wordpress',
    icon: SiWordpress,
    tooltip: (
      <>
        <CustomLink href='https://wordpress.org/'>WordPress</CustomLink>, open-source PHP CMS written by <Accent>Mike Little</Accent> and <Accent>Matt Mullenweg</Accent> in 2003.
        As of 2023, nearly half of websites on the internet use WordPress, it's Wow!Press
      </>
    ),
  },
  {
    id: 'symfony',
    icon: SiSymfony,
    tooltip: (
      <>
        <CustomLink href='https://symfony.com/'>Symfony</CustomLink>, my favorite MVC framework, created by <Accent>Fabien Potencier</Accent> in 2005.
      </>
    ),
  },
  {
    id: 'linux',
    icon: SiLinux,
    tooltip: (
      <>
        <CustomLink href='https://www.linux.org/'>Linux</CustomLink>, UNIX system created by <Accent>Linux Tovalds</Accent> in 1991.
        I work on Ubuntu 20.04 these days.
      </>
    ),
  },
  {
    id: 'codeigniter',
    icon: SiCodeigniter,
    tooltip: (
      <>
        <CustomLink href='https://codeigniter.com/'>CodeIgniter</CustomLink>, first MVC framework I'v worked on.
        Created by <Accent>Derek Jones</Accent> and <Accent>Rick Ellis</Accent> in 2006.  
      </>
    ),
  },
  {
    id: 'apache',
    icon: SiApache,
    tooltip: (
      <>
        <CustomLink href='https://httpd.apache.org/'>Apache HTTP Server</CustomLink>, written by <Accent>Robert McCool</Accent> in 1995 and
        most widely used on internet today.
      </>
    ),
  },
  {
    id: 'phpmyadmin',
    icon: SiPhpmyadmin,
    tooltip: (
      <>
        <CustomLink href='https://www.phpmyadmin.net/'>phpMyAdmin</CustomLink>, free and open source administration tool for MySQL and MariaDB created by <Accent>Tobias Ratschiller</Accent> in 1998.
        And I used it most as a MySQL client in Linux/UNIX systems.
      </>
    ),
  },
  {
    id: 'node',
    icon: SiNodedotjs,
    tooltip: (
      <>
        <CustomLink href='https://nodejs.org/'>Node.js</CustomLink>, cross platform, open source runtime server environment created by <Accent>Ryan Dahl</Accent> in 2009.
      </>
    ),
  },
  {
    id: 'js',
    icon: SiJavascript,
    tooltip: (
      <>
        <CustomLink href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>JavaScript</CustomLink>, de facto best programming language in 2023, created by <Accent>Brendan Eich</Accent> in 1995. I'm big fan geek of JS.
      </>
    ),
  },
  {
    id: 'html',
    icon: SiHtml5,
    tooltip: (
      <>
        <CustomLink href='https://html.spec.whatwg.org/'>HTML</CustomLink>, Did you know it was created by <Accent>Tim Berners-Lee</Accent> at <Accent>CERN</Accent> in 1989. It's de facto standard markup language for <Accent>WWW</Accent>.
      </>
    ),
  },
  {
    id: 'css',
    icon: SiCss3,
    tooltip: (
      <>
        <CustomLink href='https://www.w3.org/Style/CSS/'>CSS</CustomLink>, created by <Accent>Håkon Wium Lie</Accent>, <Accent>Bert Bos</Accent> and <Accent>Chris Lilley</Accent> in 1994.
        It sticks with HTML together and that's the way WWW works.
      </>
    ),
  },
  {
    id: 'jQuery',
    icon: SiJquery,
    tooltip: (
      <>
        <CustomLink href='https://jquery.com/'>jQuery</CustomLink> is one of my lovely JS framework developed by <Accent>John Resig</Accent> in 2006.
      </>
    ),
  },
  {
    id: 'react',
    icon: SiReact,
    tooltip: (
      <>
        <CustomLink href='https://react.dev/'>React</CustomLink>, is a JS library that this website is built on.
        No.1 JavaScript library created by <Accent>Jordan Walke</Accent> in 2013.
      </>
    ),
  },
  {
    id: 'vuejs',
    icon: SiVuedotjs,
    tooltip: (
      <>
        <CustomLink href='https://vuejs.org/'>Vue.js</CustomLink>, written in <Accent>TypeScript</Accent> by <Accent>Evan You</Accent> in 2014 and used by me and bunch of other folks.
      </>
    ),
  },
  {
    id: 'webgl',
    icon: SiWebgl,
    tooltip: (
      <>
        <CustomLink href='https://get.webgl.org/'>WebGL</CustomLink>, created by <Accent>Khronos Group</Accent> in 2000 including <Accent>Neil Trevett</Accent>.
        I love WebGL and will create a wonderful project for everyone in future.
      </>
    ),
  },
  {
    id: 'threejs',
    icon: TbBrandThreejs,
    tooltip: (
      <>
        <CustomLink href='https://threejs.org/'>Three.js</CustomLink>, another JS 3D library in my tech stack which was created by <Accent>Ricardo Cabello</Accent> in 2010.
      </>
    ),
  },
  {
    id: 'typescript',
    icon: SiTypescript,
    tooltip: (
      <>
        <CustomLink href='https://www.typescriptlang.org/'>TypeScript</CustomLink>, one more JS thing of me written by <Accent>Anders Hejlsberg</Accent> in 2012.
      </>
    ),
  },
  {
    id: 'bootstrap',
    icon: DiBootstrap,
    tooltip: (
      <>
        <CustomLink href='https://getbootstrap.com/'>Bootstrap</CustomLink> is one of my favorite frontend CSS framework created by <Accent>Mark Otto</Accent> and <Accent>Jacob Thornton</Accent> in 2011.
      </>
    ),
  },
  {
    id: 'aws',
    icon: SiAmazonaws,
    tooltip: (
      <>
        <CustomLink href='https://aws.amazon.com/'>Amazon Web Service</CustomLink>, most widely used on-demand <Accent>Cloud Computing Platform</Accent> created by
        {' '}<Accent>Adam Selipsky</Accent>, <Accent>C.J Moses</Accent>, <Accent>Matt Garman</Accent>, <Accent>Peter DeSantis</Accent>, <Accent>Babik Parvez</Accent> and <Accent>James Hamilton</Accent> in 2002.
      </>
    ),
  },
  {
    id: 'git',
    icon: SiGit,
    tooltip: (
      <>
        <CustomLink href='https://git-scm.com/'>Git</CustomLink>, free and open source distributed version control system written by <Accent>Linus Torvalds</Accent>, <Accent>Junio Hamano</Accent> and others in 2005.
        I use it frequently to commit my code.
      </>
    ),
  },
  {
    id: 'jira',
    icon: SiJirasoftware,
    tooltip: (
      <>
        <CustomLink href='https://www.atlassian.com/software/jira'>Atlassian Jira</CustomLink>, oriented from <Accent>Bugzilla</Accent>, written in <Accent>Java</Accent>
        for bug tracking in agile way by an Australian company with key people include <Accent>Mike Cannon-Brookes</Accent>, <Accent>Scott Farquhar</Accent>,
        {" "}<Accent>Matt Quail</Accent> and <Accent>Jens Schumacher</Accent> in 2002. I've done 100+ sprints in JIRA since 2018.
      </>
    ),
  },
  {
    id: 'slack',
    icon: SiSlack,
    tooltip: (
      <>
        <CustomLink href='https://slack.com/'>Slack</CustomLink>, instant messaging tool, developed by <Accent>Stewart Butterfield</Accent>,
        {" "}<Accent>Eric Costello</Accent>, <Accent>Cal Henderson</Accent> and <Accent>Serguei Mourachov</Accent>. I use it everyday for team work.
      </>
    ),
  },
  {
    id: 'ms-teams',
    icon: SiMicrosoftteams,
    tooltip: (
      <>
        <CustomLink href='https://teams.com/'>Microsoft Teams</CustomLink>, is also a communication platform developed by <Accent>Microsoft</Accent> developers
        with some key people include <Accent>Brian MacDonald</Accent>, <Accent>Ruchir Astavans</Accent> and so on. It's also used by a lot of users as well as me.
      </>
    ),
  },
  {
    id: 'google-meet',
    icon: SiGooglemeet,
    tooltip: (
      <>
        <CustomLink href='https://meet.google.com/'>Google Meet</CustomLink>, a.k.a <Accent>Google Hangouts Meet</Accent> is a video communication service developed by <Accent>Google</Accent> in 2017.
        I started using it during COVID-19 and am still using it. <Accent>Smita Hashim</Accent> is known as lead developer.
      </>
    ),
  },
  {
    id: 'zoom',
    icon: SiZoom,
    tooltip: (
      <>
        <CustomLink href='https://zoom.us/'>Zoom</CustomLink>, cloud-based <Accent>peer-to-peer</Accent> videotelephony service developed by <Accent>Eric Yuan</Accent> in 2011. It's also widely used world-wide and me.
      </>
    ),
  },
  {
    id: 'kubernetes',
    icon: SiKubernetes,
    tooltip: (
      <>
        <CustomLink href='https://kubernetes.io/'>Kubernetes</CustomLink>, is an open-source <Accent>container orchestration</Accent> system for automating software deployment.
        Desinged and developed by Google folks include <Accent>Joe Beda</Accent>, <Accent>Brendan Burns</Accent> and <Accent>Craig McLuckie</Accent> in 2014.
      </>
    ),
  },
  {
    id: 'github-actions',
    icon: SiGithubactions,
    tooltip: (
      <>
        <CustomLink href='https://github.com/features/actions'>GitHub Actions</CustomLink> makes it easy to automate all your software workflows, now with world-class CI/CD created by <Accent>GitHub</Accent> in 2019.
      </>
    ),
  },
  {
    id: 'docker',
    icon: SiDocker,
    tooltip: (
      <>
        <CustomLink href='https://www.docker.com/'>Docker</CustomLink> is a set of <Accent>PaaS</Accent> that use <Accent>OS-level virtualization</Accent> to deliver software in packages called <Accent>container</Accent>(s).
        It started in 2013 by <Accent>Solomon Hykes</Accent> and now being used widely.
      </>
    ),
  },
];
