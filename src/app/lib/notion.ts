import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID!;

export async function getAllPosts() {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return response.results;
}

export async function getPostBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      and: [
      {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
      {
        property: "Published",
        checkbox: {
           equals: true
        },
      },
    ],

    },
    page_size: 1,
  });

  if (!response.results || response.results.length === 0) {
    return null;
  }

  return response.results[0];
}

export async function getPageContent(pageId: string) {
  const blocks = [];
  let cursor;
  do {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });
    blocks.push(...response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  return blocks;
}
