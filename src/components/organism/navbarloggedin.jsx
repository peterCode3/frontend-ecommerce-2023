// import AnchorTag from 'next/AnchorTag';
import AnchorTag from '../atoms/AnchorTag/AnchorTag';


const Navbar = () => {
  // Define the inline styles
  const navItemStyle = 'inline-block p-4 md:font-bold no-underline text-black';

  return (
    <nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li className={navItemStyle}>
            <AnchorTag href='/'>Home</AnchorTag>
        </li>
        <li className={navItemStyle}>
          <AnchorTag href="/">About</AnchorTag>
        </li>
        <li className={navItemStyle}>
          <AnchorTag href="/">Category</AnchorTag>
        </li>
        <li className={navItemStyle}>
          <AnchorTag href="/">Shop</AnchorTag>
        </li>
        <li className={navItemStyle}>
          <AnchorTag href="/">Blog</AnchorTag>
        </li>
        <li className={navItemStyle}>
          <AnchorTag href="/">Contact Us</AnchorTag>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
