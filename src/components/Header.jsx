export default function Header() {
    return (
        <header className="bg-orange-400 shadow fixed top-0 w-full z-10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Aladino Jephthah</h1>
                <nav className="space-x-6 text-gray-700">
                    <a href="#about" className="hover:text-white">About</a>
                    <a href="#projects" className="hover:text-white">Projects</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </nav>
            </div>
        </header>
    );
}