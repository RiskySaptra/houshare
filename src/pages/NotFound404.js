const NotFound404 = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-500">
      <div className="row">
        <div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
          <div className="relative ">
            <h1 className="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
            <span className="absolute  top-0   -ml-12  text-gray-300 font-semibold">
              Oops!
            </span>
          </div>
          <h5 className="text-gray-300 font-semibold -mr-10 -mt-3">
            Page not found
          </h5>
          <p className="text-gray-100 mt-2 mb-6">
            Hacker ya kamu !
            {/* we are sorry, but the page you requested was not found */}
          </p>
          <a
            className="bg-green-400  px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded hover:shadow-lg"
            href="/"
          >
            Balik di panggil mamak mu
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
