import Link from "next/link";

export default function Navbar() {
  return (
        <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
           <div className="container mx-auto px-4 h-16 flex items-center justify-between">
             <div className="flex items-center space-x-2">
               <span className="font-semibold text-3xl">Inherify</span>
             </div>
             <nav className="hidden md:flex items-center space-x-8">
             </nav>
             <div className="flex space-x-4">
               <Link href="/create-will" passHref>
                 <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm transition-colors">
                   Create Will
                 </button>
               </Link>
               <Link href="/check-my-will" passHref>
                 <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm transition-colors">
                   Check My Will
                 </button>
               </Link>
             </div>
           </div>
         </header>
  );
}
