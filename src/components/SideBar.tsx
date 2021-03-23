import { useEffect, useState } from "react";

import { Button } from "./Button";
import { api } from "../services/api";
import * as t from "../types";

interface SideBarProps {
  handleSelectedGenre: (id: number) => void;
}

export function SideBar({ handleSelectedGenre }: SideBarProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<t.GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<t.GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
    handleSelectedGenre(selectedGenreId);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
