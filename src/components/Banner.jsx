import banner from '../assets/banner.jpg'
const Banner = () => {
  return (
    <div
      className="hero min-h-[calc(100vh-116px)]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Style Like you do!</h1>
          <p className="mb-5">
            Welcome to StyleHeaven — where fashion meets elegance.
            Discover premium styles crafted just for you!
          </p>
          <a href='#products' className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;