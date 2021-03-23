import { useState } from "react";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";
interface AppProps {
  handleSelectedGenre: (id: number) => {};
  genreId: number;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleSelectedGenre = (genreId: number) => {
    setSelectedGenreId(genreId);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar handleSelectedGenre={handleSelectedGenre} />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
