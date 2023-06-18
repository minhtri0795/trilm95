import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility function to merge Tailwind classes with clsx and tailwind-merge */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function appendComments() {
  const commentDiv = document.getElementById('git-comments')
  const commentScript = document.createElement('script')
  const theme = localStorage.getItem('theme')

  commentScript.async = true
  commentScript.src = 'https://utteranc.es/client.js'
  commentScript.setAttribute('repo', 'minhtri0795/trilm95-comments')
  commentScript.setAttribute('issue-term', 'pathname')
  commentScript.setAttribute('id', 'utterances')
  commentScript.setAttribute(
    'theme',
    theme === 'dark' ? 'github-dark' : 'github-light'
  )
  commentScript.setAttribute('crossorigin', 'anonymous')

  if (!commentDiv.firstChild) {
    commentDiv.appendChild(commentScript)
  } else {
    console.error('Error adding utterances comments')
  }
}