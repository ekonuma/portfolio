import React from 'react';
import { NotionBlock } from "@/app/blog/[slug]/page";
import ReactMarkdown from 'react-markdown';
import '@/styles/notion-content.css';

export default function NotionContent({ blocks }: { blocks: NotionBlock[] }) {
  return (
    <div className="space-y-6 notion-content">
      {blocks.map((block) => {
        let content = "";

        switch (block.type) {
          case "paragraph":
            if ("paragraph" in block) {
              content = block.paragraph.rich_text.map((text) => text.plain_text).join("");
            }
            return (
              <ReactMarkdown
                key={block.id}
              >
                {content}
              </ReactMarkdown>
            );

          case "heading_1":
            if ("heading_1" in block) {
              content = block.heading_1.rich_text.map((text) => text.plain_text).join("");
            }
            return (
              <ReactMarkdown
                key={block.id}
              >
                {`# ${content}`}
              </ReactMarkdown>
            );

          case "heading_2":
            if ("heading_2" in block) {
              content = block.heading_2.rich_text.map((text) => text.plain_text).join("");
            }
            return (
              <ReactMarkdown
                key={block.id}
              >
                {`## ${content}`}
              </ReactMarkdown>
            );

          case "heading_3":
            if ("heading_3" in block) {
              content = block.heading_3.rich_text.map((text) => text.plain_text).join("");
            }
            return (
              <ReactMarkdown
                key={block.id}
              >
                {`### ${content}`}
              </ReactMarkdown>
            );

          case "bulleted_list_item":
            if ("bulleted_list_item" in block) {
              content = block.bulleted_list_item.rich_text.map((text) => text.plain_text).join("");
            }
            return (
              <ul key={block.id} className="list-disc ml-6 text-gray-700 dark:text-gray-300">
                <li className="mb-2">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </li>
              </ul>
            );

          case "numbered_list_item":
            if ("numbered_list_item" in block) {
              content = block.numbered_list_item.rich_text.map((text) => text.plain_text).join("");
            }
            return (
              <ol key={block.id} className="list-decimal ml-6 text-gray-700 dark:text-gray-300">
                <li className="mb-2">
                  <ReactMarkdown>{content}</ReactMarkdown>
                </li>
              </ol>
            );

          default:
            return (
              <div key={block.id} className="text-red-500">
                [Tipo não suportado: {block.type}]
              </div>
            );
        }
      })}
    </div>
  );
}