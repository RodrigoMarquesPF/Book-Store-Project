import React from 'react'
import { Link } from "react-router-dom";
import { BookOpenText } from 'lucide-react';
import { FilePenLine } from "lucide-react";
import { Info } from "lucide-react";
import { XSquare } from "lucide-react";
import { CircleUser } from 'lucide-react';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({books}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  )
}

export default BooksCard