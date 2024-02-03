import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { PlusSquare } from "lucide-react";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
import { Button } from "../../components/ui/button";


const Home = () => {
  const [books, setbooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

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
      
        <div className="flex justify-center items-center gap-x-4">
          <Button onClick={() => setShowType("table")}>Table</Button>
          <Button onClick={() => setShowType("card")}>Card</Button>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Lista de Livros</h1>
          <Link to="/books/create">
            <PlusSquare color="orange" className="text-sky-800 text-4xl " />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </>
  );
};

export default Home;
