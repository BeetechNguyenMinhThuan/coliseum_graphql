interface Tag{
  tag: any
}
export const TagNovel = ({tag}: Tag) => {
  return (
    <span
        key={tag}
        className="border-2 border-gray-200 bg-transparent px-4 py-1 mr-2 last:mr-0 cursor-pointer hover:bg-gray-200"
    >
        {tag}
    </span>
  )
}
