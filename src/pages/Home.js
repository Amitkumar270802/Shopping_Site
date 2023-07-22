import React, { useEffect, useState } from "react";
import Product from "../component/Product";
import Spinner from "../component/Spinner";

const Home = () => {
  const Api_Url = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetch_ProductData() {
    setLoading(true);
    try {
      const res = await fetch(Api_Url);
      const data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log("Error");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetch_ProductData();
  }, []);
  return (
    <div className="">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-[1160px]">
          {posts.map((post) => (
            <Product post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
