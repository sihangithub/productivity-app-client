
const Navbar = () => {

    return (
        <nav className="bg-black w-full">
           
                <ul className="flex space-x-4 text-white px-4 py-2">
                    <li>
                        <a href="/login">LOGIN</a>
                    </li>
                    <li>
                        <a href="/">MAIN</a>
                    </li>
                    <li>
                        <a href="/finance">FINANCE</a>
                    </li>
                </ul>
           
        </nav>
    )
}

export default Navbar