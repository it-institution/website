import {
  defineDocs,
  defineConfig,
  type DefaultMDXOptions,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

import { remarkInstall } from "fumadocs-docgen";

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
  mdxOptions: mdxOptions,
  // generateManifest: false,
});
