import { Category } from "./CategoryList";

interface CategoryItemProps {
    cate: Category; // Sử dụng type Category đã khai báo ở trên
  }
export const CategoryItem = ({cate}: CategoryItemProps) => {
    
  return (
    <div>
        <div className="border-b-2 border-black">
            <div className="text-3xl border-b-2 border-black border-dashed py-2">{cate.title}</div>
            <div className="grid grid-cols-[1fr_4fr] gap-4 my-3">
                <img src={cate.image} className="w-[200px] h-[200px]" alt="" />
                <p>
                    {cate.description}
                </p>
            </div>
        </div>
    </div>
  )
}
