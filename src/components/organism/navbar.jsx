import Link from 'next/link';

const Navbar = () => {
  // Define the inline styles
  const navItemStyle = {
    display: 'inline-block',
    padding: '10px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={navItemStyle}>
          <Link href="/">Home</Link>
        </li>
        <li style={navItemStyle}>
          <Link href="/">About</Link>
        </li>
        <li style={navItemStyle}>
          <Link href="/">Category</Link>
        </li>
        <li style={navItemStyle}>
          <Link href="/">Shop</Link>
        </li>
        <li style={navItemStyle}>
          <Link href="/">Blog</Link>
        </li>
        <li style={navItemStyle}>
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
