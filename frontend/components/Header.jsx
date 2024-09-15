const Header = () => {
  return (
    <section
      id="header"
      className="sticky w-screen bg-emerald-500 py-4 px-[10%]"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo font-bold uppercase tracking-wide">
            <h1>Template Store</h1>
          </div>
          <div className="nav text-white font-semibold">
            <li className="inline-flex gap-6">
              <ul>Home</ul>
              <ul>Product</ul>
              <ul>About</ul>
              <ul>Contact</ul>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
