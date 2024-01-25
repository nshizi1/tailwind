
function navbar() {
  return (
    <header className="flex items-center justify-between p-4 text-pink-200 bg-blue-950">
      <div className="logo">
        <h1 className="text-4xl font-bold">Trave Ltd</h1>
      </div>
      <div className="links">
        <ul className="flex gap-3 text-xl">
          <li className="hover:text-pink-600 transition ease-in-out"><a href="#">Home</a></li>
          <li className="hover:text-pink-600 transition ease-in-out"><a href="#">Services</a></li>
          <li className="hover:text-pink-600 transition ease-in-out"><a href="#">Portfolio</a></li>
          <li className="hover:text-pink-600 transition ease-in-out"><a href="#">About Us</a></li>
          <li className="hover:text-pink-600 transition ease-in-out"><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="btns">
        <a href="#" className="text-xl"><button className="px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-800 transition ease-in-out hover:text-pink-100">Log In</button></a>
      </div>
    </header>
  )
}

export default navbar
