function Header() {
  return (
    <>
      <div className="header h-20 w-full fixed flex justify-between items-center backdrop-opacity-40 bg-black bg-opacity-25 hover:bg-opacity-55 duration-150 backdrop-blur-3xl">
        <div className="logo">
          <img
            src="/mainlogo.png"
            alt="Solero Main Logo"
            className="scale-50"
          />
        </div>
        <div className="links w-1/2 flex justify-around items-center">
          <a
            href="#"
            className="font-semibold text-white transition-all hover:underline underline-offset-8 hover:py-4 hover:duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="font-semibold text-white transition-all hover:underline underline-offset-8 hover:py-4 hover:duration-300"
          >
            Products
          </a>
          <a
            href="#"
            className="font-semibold text-white transition-all hover:underline underline-offset-8 hover:py-4 hover:duration-300"
          >
            Support
          </a>
          <a
            href="#"
            className="font-semibold text-white transition-all hover:underline underline-offset-8 hover:py-4 hover:duration-300"
          >
            Projects
          </a>
          <a
            href="#"
            className="font-semibold text-white transition-all hover:underline underline-offset-8 hover:py-4 hover:duration-300"
          >
            Blogs
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
