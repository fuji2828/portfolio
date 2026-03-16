export default function Navbar() {
  return (
    <nav className="flex justify-center items-center max-w-6xl mx-auto p-6">

      <div className="flex gap-6 text-sm">
        <a href="/home">Projects</a>
        <a href="/photography">Photography</a>
        <a href="/profile">Profile</a>
      </div>

    </nav>
  );
}