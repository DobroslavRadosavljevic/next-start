import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const playbookEntries = defineCollection({
  name: "playbookEntries",
  directory: "./src/content/playbook",
  include: "**/*.md",
  parser: "frontmatter",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(["playbook", "guide", "note"]),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    content: z.string(),
  }),
  transform: (entry) => {
    const wordCount = entry.content.split(/\s+/).filter(Boolean).length;
    const normalizedContent = entry.content.replaceAll(/\s+/g, " ").trim();
    const preview =
      normalizedContent.length > 180
        ? `${normalizedContent.slice(0, 177)}...`
        : normalizedContent;

    return {
      ...entry,
      slug: entry._meta.path,
      readingTimeMinutes: Math.max(1, Math.ceil(wordCount / 200)),
      preview,
    };
  },
});

export default defineConfig({
  content: [playbookEntries],
});
