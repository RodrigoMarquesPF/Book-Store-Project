import { Link } from 'react-router-dom';
import { ArrowLeftSquare } from 'lucide-react';
import { Button } from "../../components/ui/button";

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className=' text-white px-4 py-1 rounded-lg w-fit'
      >
        <Button>
        <ArrowLeftSquare className='text-2xl'/>
      </Button>
        
      </Link>
    </div>
  );
};

export default BackButton;