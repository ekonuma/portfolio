import { NotionBlock } from "@/app/blog/[slug]/page";

export default function NotionContent({ blocks }: { blocks: NotionBlock[] }) {
  return (
    <div>
      {blocks.map((block) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={block.id}>
                {"paragraph" in block
                  ? block.paragraph.rich_text.map((text) => text.plain_text).join("")
                  : ""}
              </p>
            );
          case "heading_1":
            return (
              <h1 key={block.id}>
                {"heading_1" in block
                  ? block.heading_1.rich_text.map((text) => text.plain_text).join("")
                  : ""}
              </h1>
            );
          case "heading_2":
            return (
              <h2 key={block.id}>
                {"heading_2" in block
                  ? block.heading_2.rich_text.map((text) => text.plain_text).join("")
                  : ""}
              </h2>
            );
          case "bulleted_list_item":
            return (
              <ul key={block.id}>
                <li>
                  {"bulleted_list_item" in block
                    ? block.bulleted_list_item.rich_text.map((text) => text.plain_text).join("")
                    : ""}
                </li>
              </ul>
            );
          case "numbered_list_item":
            return (
              <ol key={block.id}>
                <li>
                  {"numbered_list_item" in block
                    ? block.numbered_list_item.rich_text.map((text) => text.plain_text).join("")
                    : ""}
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