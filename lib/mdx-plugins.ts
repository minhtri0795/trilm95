import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";
import { type Pluggable } from "unified";
import remarkGfm from "remark-gfm";
export const remarkPlugins: Pluggable[] = [
  // GitHub Flavored Markdown
  remarkGfm,
];
export const rehypePlugins: Pluggable[] = [
  // Add titles to code blocks
  rehypeCodeTitles,

  // Syntax highlighting in code blocks
  rehypeHighlight,
];
