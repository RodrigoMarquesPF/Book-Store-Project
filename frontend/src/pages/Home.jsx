
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import React from "react";
import { FishSymbol } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FilePenLine } from "lucide-react";
import { Info } from "lucide-react";
import { PlusSquare } from "lucide-react";
import { XSquare } from "lucide-react";

const Home = () => {
  const [books, setbooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setbooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Lista de Livros</h1>
          <Link to="/books/create">
            <PlusSquare color='orange' className="text-sky-800 text-4xl " />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : (
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
        )}
      </div>
    
    </>
  );
};

export default Home;
