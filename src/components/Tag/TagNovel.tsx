import React from "react"

interface TagProps{
  children: React.ReactNode
}
export const TagNovel = ({children}: TagProps) => {
  return (
    <span
        className="border-[1px] border-color1 bg-transparent px-4  mr-2 last:mr-0 cursor-pointer hover:bg-color1 rounded-[6px]"
    >
        {children}
    </span>
  )
}
