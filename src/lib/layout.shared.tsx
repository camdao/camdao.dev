import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { FumadocsLogo } from '@/components/FumadocsLogo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: ( 
        <div className="flex items-center gap-2 font-semibold">
          <FumadocsLogo />
          <span className="font-medium">{appName}</span>
        </div>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
