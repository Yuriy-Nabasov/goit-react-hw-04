import { useState, useEffect } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
// import Heading from "../Heading/Heading";

// import { Analytics } from "@vercel/analytics/react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchArticles } from "../../articleService";
import "./App.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";

export default function App() {
  const [articles, setArticles] = useState([]);

  const handleSearch = async (topic) => {
    try {
      const data = await fetchArticles(topic);
      setArticles(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <Container>
        {/* <Heading title="Image search" bottom tag={`h1`} /> */}
        {/* <SearchBox value={myFilter} onFilter={setMyFilter} /> */}
        <SearchBar onSearch={handleSearch} />
        {/* <Loader /> */}
        <ImageGallery items={articles} />
        {/* <Analytics /> */}
      </Container>
    </Section>
  );
}
