import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="lg:w-1/2">
        {/* <Image src={'/images/login.jpg'} alt="Login" width={500} height={500} /> */}
        <div className="bg-black/70 w-full h-64 lg:h-full flex items-center justify-center">
          {/* You can add any overlay content here if needed */}
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center w-full lg:w-1/2 p-6 bg-gradient-to-tr from-blue-300 via-black to-blue-300">
        <form className="flex flex-col gap-2 w-full max-w-sm bg-white/20 rounded-lg shadow-white shadow-md backdrop-blur-sm p-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Welcome back
          </h1>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link className="text-blue-600 text-right text-sm" href="/">
            Forgot Password?
          </Link>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          <p className="text-black text-center">
            Don't have an account?{" "}
          <Link className="text-blue-600" href="/signup">
            Sign Up
          </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
