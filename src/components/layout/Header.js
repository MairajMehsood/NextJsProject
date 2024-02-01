
import Link from "next/link";

const Header = () => {


  return (
    <header className="flex justify-between items-center md:flex-row flex-col">
    <div>
    <Link className="text-primary  font-semibold text-2xl" href={""}>SI PIZZA</Link>
    </div>
    <nav className="flex gap-8 text-gray-500 font-semibold items-center md:flex-row flex-col" >
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/contact">Contact</Link>
      <Link href="#" className="bg-primary rounded-full text-white py-2 px-8">Login</Link>
    </nav>
    
  </header>
  )
}

export default Header