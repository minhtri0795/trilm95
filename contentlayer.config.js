import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { rehypePlugins, remarkPlugins } from "./lib/mdx-plugins";
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "Short summary of the post",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "Tags for the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins,
    remarkPlugins,
  },
});
