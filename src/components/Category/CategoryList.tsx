import { RegisterAuthor } from "components/RegisterAuthor/RegisterAuthor"
import { CategoryItem } from "./CategoryItem"
import { RegisterLogo } from "components/ResigterLogo/RegisterLogo";

// Khai báo type cho một category
export interface Category {
  image: string;
  title: string;
  description: string;
}

// Khai báo type cho props của component
interface CategoryListProps {
  categories: Category[];
}

export const CategoryList = ({categories}: CategoryListProps) => {
  
  return (
    <div className="border-2 p-2">
      <RegisterAuthor></RegisterAuthor>
      {
        categories.map((cate, index) => (
          <CategoryItem key={index} cate={cate}></CategoryItem>
        ))
      }
      <RegisterLogo></RegisterLogo>
    </div>
  )
}
