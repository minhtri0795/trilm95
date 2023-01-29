"use client";
import { useState } from "react";
import { MdContentCopy, MdDone } from "react-icons/md";
type CodeBlockProps = {
  children: React.ReactNode;
};

export function CodeBlock({ children }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(
      extractText(children as React.ReactElement)
    );

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <pre className="relative mx-auto max-w-3xl">
      <button
        className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded bg-white dark:bg-[#22272E]"
        onClick={copy}
        disabled={isCopied}
      >
        {isCopied ? (
          <MdDone className="fill-current" size="1.2em" aria-label="Copied" />
        ) : (
          <MdContentCopy
            className="fill-current"
            size="1.2em"
            aria-label="Copy code"
          />
        )}
      </button>

      {children}
    </pre>
  );
}

/**
 * Extracts the text from a ReactElement
 */
const extractText = (element: React.ReactElement | string): string => {
  // If the element is a string, return it
  if (typeof element === "string") {
    return element;
  }

  // If the element is a ReactElement, check if it has children
  // If the children is a single string, return it
  if (typeof element.props.children === "string") {
    return element.props.children;
  }

  // If the children is an array, map over it and extract the text
  if (Array.isArray(element.props.children)) {
    return (element.props.children as (React.ReactElement | string)[])
      .map((child) => extractText(child))
      .join("");
  }

  // If the children is an object (ReactElement), extract the text from it recursively
  if (typeof element.props.children === "object") {
    return extractText(element.props.children);
  }

  return "";
};
