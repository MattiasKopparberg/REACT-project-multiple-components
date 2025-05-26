import Hamburger from './Hamburger';
import Navbar from './Navbar';
export default function Header({isOpen}) {
  return (
    <header className="header">
      <h1 className="title">F25D Borås YH - React kurs</h1>
      <Navbar className={`navcontainer ${isOpen ? 'active' : 'hidden'}`} />
      <Hamburger />
    </header>
  );
}
