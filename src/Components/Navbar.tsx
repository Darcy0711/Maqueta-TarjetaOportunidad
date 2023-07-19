import Cronos1 from '../assets/img/Cronos1.png';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-900">
      <div className="flex items-center">
        <img src={Cronos1} alt="Logo" className="h-8 mr-4 sm:ml-[10rem] ml-4 text-2xl" />
        <p className='text-white sm:ml-[98rem] ml-32'>Enrique Guzman</p> 
        <i className="fa-solid fa-right-from-bracket ml-3 text-white"></i>
      </div>
    </nav>
  );
};
