

const Navbar = () =>{
     return(
          <nav className="flex justify-between bg-slate-700 text-white">
               <div className="logo">
                    <span className="font-bold text-xl mx-9">itask</span>
               </div>
               <ul className="flex gap-8">
                    <li>Home</li>
                    <li>Your Tasks</li>
               </ul>


          </nav>

     )
}

export default Navbar