import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const results = items.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredUsers(results);
  }, [search, items]);

  return (
    <main className="relative w-full md:block ">
      <div className="flex items-center h-10 bg-[#dad4b5] rounded-2xl px-2 border-[1px]">
        <input type="text" placeholder="Search..." className="bg-transparent outline-none px-3 w-full text-sm" value={search} onChange={(e) => setSearch(e.target.value)} />
        <CiSearch className="text-gray-700 text-lg cursor-pointer" aria-label="Search" />
      </div>

      {search && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border z-10">
          <ul className="space-y-2 p-2">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <li key={user.id} className="p-2 border rounded-md hover:bg-gray-100 cursor-pointer transition">
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500 p-2">No users found.</p>
            )}
          </ul>
        </div>
      )}
    </main>
  );
}
