import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-6 py-4 bg-black text-white sticky top-0 z-50">
      <h1 className="text-red-600 font-bold text-xl">NETFLIX</h1>

      <div className="flex gap-6">
        <span onClick={() => navigate("/home")} className="cursor-pointer">Home</span>
        <span className="cursor-pointer">TV Shows</span>
        <span className="cursor-pointer">Movies</span>
        <span className="cursor-pointer">Video Games</span>
        <span onClick={() => navigate("/search")} className="cursor-pointer">Search</span>
      </div>
    </div>
  );
}