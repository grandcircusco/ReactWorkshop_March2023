import "./Header.css";

interface HeaderProps {
  name: string;
}
const Header = ({ name }: HeaderProps) => {
  return (
    <header className="Header">
      <h1>Ice Cream Wars</h1>
      <p>Welcome Back {name}</p>
    </header>
  );
};

export default Header;
