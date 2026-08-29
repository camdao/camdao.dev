import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/components/mdx';

export default function HomePage() {
  const page = source.getPage(['camdao-introduce']);
  const MDXContent = page?.data.body;

  if (!page || !MDXContent) {
    return (
      <div className="flex flex-col justify-center items-center flex-1 p-8 text-center">
        <h1 className="text-xl font-bold">Chưa tìm thấy file camdao-introduce.mdx</h1>
        <p className="text-muted-foreground mt-2">
          Vui lòng tạo file tại <code>content/blogs/camdao-introduce.mdx</code>
        </p>
      </div>
    );
  }

  return (
    <DocsLayout sidebar={{ enabled: false }} tree={{ name: 'root', children: [] }}>
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDXContent
            components={getMDXComponents({
              a: createRelativeLink(source, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </DocsLayout>
  );
}
