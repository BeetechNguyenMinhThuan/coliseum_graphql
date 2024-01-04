import React from "react"

interface TagProps{
  children: React.ReactNode
}
export const TagNovel = ({children}: TagProps) => {
  return (
    <span
        className="border-2 border-gray-200 bg-transparent px-4 py-1 mr-2 last:mr-0 cursor-pointer hover:bg-gray-200"
    >
        {children}
    </span>
  )
}
