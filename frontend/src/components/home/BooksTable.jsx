import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../../components/ui/table";
  import { FilePenLine } from "lucide-react";
import { Info } from "lucide-react";
import { XSquare } from "lucide-react";
import { Link } from "react-router-dom";

const BooksTable = ({books}) => {
  return (
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead className='text-center'>No</TableHead>
        <TableHead className='text-center'>Title</TableHead>
        <TableHead className='text-center'>Autor</TableHead>
        <TableHead className='text-center'>Anor de publicação</TableHead>
        <TableHead  className='text-center'>Operações</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {books.map((book, index) => (
        <TableRow key={book._id}>
          <TableCell className='text-center'>{index + 1}</TableCell>
          <TableCell className='text-center'>{book.title}</TableCell>
          <TableCell className='text-center'>{book.author}</TableCell>
          <TableCell className='text-center'>{book.publishYear}</TableCell>
          <TableCell>
            <div className="flex justify-center gap-x-4">
              <Link to={`/books/details/${book._id}`}>
                <Info className='text-2xl text-green-800'/>
              </Link>
              <Link to={`/books/edit/${book._id}`}>
                <FilePenLine className='text-2xl text-yellow-600'/>
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <XSquare className='text-2xl text-red-600' />
              </Link>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}

export default BooksTable