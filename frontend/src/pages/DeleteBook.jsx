import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "../../components/ui/button";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        //enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        //enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Deletar Livro</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-orange-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Tem certeza que e para deletar esse livro?</h3>

        <Button
          
          onClick={handleDeleteBook}
        >
          Sim, delete isso.
        </Button>
      </div>
    </div>
  )
}

export default DeleteBook