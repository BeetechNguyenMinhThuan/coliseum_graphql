function Hero({ children }) {
  return (
    <div className={`relative z-50 bg-white p-[140px]`} style={{
      backgroundImage: `url("https://png.pngtree.com/background/20210710/original/pngtree-creative-synthesis-simple-book-education-and-training-background-picture-image_1048845.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%'
    }}>
      <div className="container mx-auto">
        <div className="children py-4">
          <div className="my-14 w-1/2">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
