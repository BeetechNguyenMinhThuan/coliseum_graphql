export const Advertisement = ({children}: any) => {
  return (
    <section>
        <div className="flex gap-20 mt-[30px] mb-[30px]"> 
            {
                children?.map((image: String, index: number) => (
                    <div key={index}>
                       <img className="image-ads" src={`assets/advertisement/${image}`} alt="" />
                    </div>
                ))
            }
        </div>
    </section>
  )
}
