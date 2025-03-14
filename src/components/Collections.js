import React, { useState } from "react";
import { BookOpen, Briefcase, Palette, FileJson } from "lucide-react";
import CollectionSection from "./CollectionSection";

const Collections = () => {
  const [favorites, setFavorites] = useState([
    { icon: FileJson, label: "Project Management & T..." },
    { icon: BookOpen, label: "Family Recipe Collection" },
  ]);

  const handleFavoriteToggle = (title, isAdding) => {
    setFavorites((prevFavorites) => {
      if (isAdding) {
        return [...prevFavorites, { icon: BookOpen, label: title }];
      }
      return prevFavorites.filter((fav) => fav.label !== title);
    });
  };

  const collections = [
    { icon: BookOpen, label: "Personal Life Management" },
    { icon: Briefcase, label: "Professional Development" },
    { icon: Palette, label: "Creative Projects" },
  ];

  return (
    <div>
      <CollectionSection title="Favorites" items={favorites} />
      <CollectionSection title="Collections" items={collections} />
    </div>
  );
};

export default Collections;
