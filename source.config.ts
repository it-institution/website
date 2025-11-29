import { remarkInstall } from "fumadocs-docgen";
import {
  type DefaultMDXOptions,
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const { docs, meta } = defineDocs({
  dir: "content/blog",
  docs: {
    schema: frontmatterSchema.extend({
      description: z
        .string()
        .describe("A brief description of the post for SEO and previews"),
      draft: z.boolean().optional().default(false),
      author: z.string().describe("Author of the post, github username"),
      date: z
        .string()
        .or(z.date())
        .transform((value, context) => {
          try {
            return new Date(value);
          } catch {
            context.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Invalid date",
            });
            return z.NEVER;
          }
        }),
    }),
  },
});

const mdxOptions: DefaultMDXOptions = {
  remarkPlugins: [remarkInstall],
  rehypePlugins: (v) => [...v],
};

export default defineConfig({
  mdxOptions,
  // generateManifest: false,
});
