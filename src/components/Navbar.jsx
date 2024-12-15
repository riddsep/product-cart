const Navbar = ({ query, setQuery }) => {
  return (
    <nav className="flex w-4/5 mx-auto py-6 justify-center items-center">
      <h1 className="text-4xl text-[#00AA5B] font-bold">Tokopaedi</h1>
      <div className="flex-1 flex justify-center items-center">
        <input
          type="text"
          id="search"
          className="p-2 border border-gray-300 rounded-md w-96"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
