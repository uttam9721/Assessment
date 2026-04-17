// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex justify-between px-6 py-4 bg-black text-white sticky top-0 z-50">
//       <h1 className="text-red-600 font-bold text-xl">NETFLIX</h1>

//       <div className="flex gap-6">
//         <span onClick={() => navigate("/home")} className="cursor-pointer">Home</span>
//         <span className="cursor-pointer">TV Shows</span>
//         <span className="cursor-pointer">Movies</span>
//         <span className="cursor-pointer">Video Games</span>
//         <span onClick={() => navigate("/search")} className="cursor-pointer">Search</span>
//       </div>
//     </div>
//   );
// }





import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4">
        <h1
          className="text-red-600 font-bold text-xl cursor-pointer"
          onClick={() => navigate("/home")}
        >
          NETFLIX
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <span onClick={() => navigate("/home")} className="cursor-pointer hover:text-gray-300">Home</span>
          <span className="cursor-pointer hover:text-gray-300">TV Shows</span>
          <span className="cursor-pointer hover:text-gray-300">Movies</span>
          <span className="cursor-pointer hover:text-gray-300">Video Games</span>
          <span onClick={() => navigate("/search")} className="cursor-pointer hover:text-gray-300">Search</span>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-black border-t border-gray-800">
          <span onClick={() => navigate("/home")} className="cursor-pointer">Home</span>
          <span className="cursor-pointer">TV Shows</span>
          <span className="cursor-pointer">Movies</span>
          <span className="cursor-pointer">Video Games</span>
          <span onClick={() => navigate("/search")} className="cursor-pointer">Search</span>
        </div>
      )}
    </div>
  );
}