type Block = any;

export default function NotionBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div>
      {blocks.map((block) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={block.id}>
                {block.paragraph.rich_text.map((text: any) => text.plain_text).join("")}
              </p>
            );
          case "heading_1":
            return (
              <h1 key={block.id}>
                {block.heading_1.rich_text.map((text: any) => text.plain_text).join("")}
              </h1>
            );
          case "heading_2":
            return (
              <h2 key={block.id}>
                {block.heading_2.rich_text.map((text: any) => text.plain_text).join("")}
              </h2>
            );
          case "bulleted_list_item":
            return (
              <ul key={block.id}>
                <li>
                  {block.bulleted_list_item.rich_text.map((text: any) => text.plain_text).join("")}
                </li>
              </ul>
            );
          case "numbered_list_item":
            return (
              <ol key={block.id}>
                <li>
                  {block.numbered_list_item.rich_text.map((text: any) => text.plain_text).join("")}
                </li>
              </ol>
            );
          default:
            return <div key={block.id}>[Tipo não suportado: {block.type}]</div>;
        }
      })}
    </div>
  );
}