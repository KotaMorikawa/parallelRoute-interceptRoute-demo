import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b-2 px-8 py-4 mb-4 container mx-auto">
      <Link href="/">
        <h1 className="text-3xl text-center">猫の写真</h1>
      </Link>
    </header>
  );
};

export default Header;
