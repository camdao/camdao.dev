import { Cards, Card } from 'fumadocs-ui/components/card';
import { source } from '@/lib/source';

function getFirstPage(node: any): { url: string; description?: any } | undefined {
  if (node.type === 'page') {
    return { url: node.url, description: node.description };
  }
  if (node.type === 'folder') {
    if (node.index?.url) {
      return { url: node.index.url, description: node.index.description };
    }
    if (Array.isArray(node.children)) {
      for (const child of node.children) {
        const page = getFirstPage(child);
        if (page) return page;
      }
    }
  }
  return undefined;
}

export function IndexCategoryCards() {
  const tree = source.getPageTree();

  // Nhóm các item theo Separator (như ---Java---, ---Docker---)
  const groups: { name: string; items: any[] }[] = [];
  let currentGroup = { name: '', items: [] as any[] };

  for (const item of tree.children) {
    if (item.type === 'separator') {
      if (currentGroup.items.length > 0 || currentGroup.name) {
        groups.push(currentGroup);
      }
      currentGroup = {
        name: typeof item.name === 'string' ? item.name : '',
        items: [],
      };
    } else {
      currentGroup.items.push(item);
    }
  }

  if (currentGroup.items.length > 0) {
    groups.push(currentGroup);
  }

  return (
    <div className="flex flex-col gap-6">
      {groups.map((group, idx) => (
        <div key={idx} className="flex flex-col gap-3">
          {group.name && (
            <h2 className="text-xl font-bold mt-4 mb-2">
              {group.name}
            </h2>
          )}
          <Cards>
            {group.items.map((item, itemIdx) => {
              if (item.type === 'folder') {
                const targetPage = item.index || getFirstPage(item);
                return (
                  <Card
                    key={itemIdx}
                    title={typeof item.name === 'string' ? item.name : 'Folder'}
                    // description={targetPage ? (targetPage as any).description : undefined}
                    href={targetPage ? targetPage.url : '#'}
                  />
                );
              }

              if (item.type === 'page') {
                return (
                  <Card
                    key={item.url}
                    title={typeof item.name === 'string' ? item.name : 'Page'}
                    // description={(item as any).description}
                    href={item.url}
                  />
                );
              }

              return null;
            })}
          </Cards>
        </div>
      ))}
    </div>
  );
}
