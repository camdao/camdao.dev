'use client';

import { useEffect, useId, useState } from 'react';
import { useTheme } from 'next-themes';

type MermaidProps = {
  chart: string;
};

export function Mermaid({ chart }: MermaidProps) {
  const id = useId().replace(/:/g, '');
  const { resolvedTheme } = useTheme();
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    let isMounted = true;
    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        fontFamily: 'inherit',
        theme: resolvedTheme === 'dark' ? 'dark' : 'default',
      });

      mermaid.render(`mermaid-${id}`, chart.replaceAll('\\n', '\n')).then(({ svg }) => {
        if (isMounted) setSvg(svg);
      });
    });

    return () => {
      isMounted = false;
    };
  }, [chart, id, resolvedTheme]);

  if (!svg) return <div className="p-4 text-sm text-muted-foreground">Loading chart...</div>;

  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}
