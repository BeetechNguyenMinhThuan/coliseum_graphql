function Hero({ children }) {
  return (
    <div className={`relative z-50 bg-white`}>
      <div className="container mx-auto">
        <div className="children py-4">
          <div className="my-14 w-1/2">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
