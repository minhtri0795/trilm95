"use client"
import React, { useEffect, useRef } from "react";
import { useTheme } from 'next-themes'
import { appendComments } from "~/lib/utils";
function CommentBox() {
const nextTheme = useTheme()
const commentBox = useRef(null);
  useEffect(() => {
    appendComments()
  }, []);

  return (
    <div className="mx-auto max-w-2xl w-full pt-10 pb-16 prose md:prose-md dark:prose-dark border-t-2 border-solid border-gray-700">
      <h3>Comments</h3>
      <div id="git-comments"/>
    </div>
  );
}

export default CommentBox;
