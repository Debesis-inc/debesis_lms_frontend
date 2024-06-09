import Image from "next/image"

const LoginPage = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        {/* <Image src={'/images/login.jpg'} alt="Login" width={500} height={500} /> */}
        <div className="bg-black/70 w-full h-screen"></div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">      
        <h1>Login</h1>
        <form className="flex flex-col">
          <input type="text" id="username" name="username" placeholder="Username" className="" />
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>

    </div>
  )
}

export default LoginPage