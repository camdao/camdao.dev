import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { FumadocsLogo } from '@/components/FumadocsLogo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 font-semibold">
          <FumadocsLogo />
          <span className="font-medium">{appName}</span>
        </div>
      ),
    },
    links: [
      {
        text: 'Blog',
        url: '/blogs',
        on: 'all',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
