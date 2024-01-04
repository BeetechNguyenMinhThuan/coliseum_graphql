export const Advertisement = () => {
    const arrAds: Array<String> = [
        's-l1200.webp',
        'coke-print-ad.jpg',
        '7_Up_-_You_like_it,_it_likes_you,_1948.jpg',
      ]
  return (
    <section>
        <div className="flex gap-20 mt-[30px]">
            {
                arrAds.map((image, index) => (
                    <div key={index}>
                       <img className="image-ads" src={`assets/advertisement/${image}`} alt="" />
                    </div>
                ))
            }
        </div>
    </section>
  )
}
