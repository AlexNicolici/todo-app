import { MovieInterface } from "./interfaces";

export const movies: MovieInterface[] = [
  {
    id: 1,
    name: "John Wick: Chapter 4",
    release: 2023,
    author: "Derek Kolstad",
    type: "action",
  },
  {
    id: 2,
    name: "The Mother",
    release: 2023,
    author: "Niki Caro",
    type: "action-drama",
  },
  {
    id: 3,
    name: "Titanic",
    release: 1997,
    author: "James Cameron",
    type: "romance",
  },
  {
    id: 4,
    name: "Ghost",
    release: 1990,
    author: "Bruce Joel Rubin",
    type: "love",
  },
  {
    id: 5,
    name: "Sing Street",
    release: 2016,
    author: "John Carney ",
    type: "comedy-drama",
  },
  {
    id: 6,
    name: "Selma",
    release: 2014,
    author: "Ava DuVernay",
    type: "drama-history",
  },
  {
    id: 7,
    name: "Paddington",
    release: 2014,
    author: "Paul King",
    type: "adventure",
  },
  {
    id: 8,
    name: "Memento",
    release: 2000,
    author: "Christopher Nolan",
    type: "mistery-thriller",
  },
  {
    id: 9,
    name: "Half Nelson",
    release: 2006,
    author: "Ryan Fleck ",
    type: "drama",
  },
];

export const releasesDates = [
  {
    id: 0,
    start: null,
  },
  {
    id: 1,
    start: 1990,
    end: 2000,
  },
  {
    id: 2,
    start: 2000,
    end: 2003,
  },
  {
    id: 3,
    start: 2000,
    end: 2010,
  },

  {
    id: 4,
    start: 2010,
    end: 2020,
  },
  {
    id: 5,
    start: 2020,
    end: 2030,
  },
];

export const releasesDatesWithLabel = releasesDates.map((releaseDate) => {
  if (releaseDate.id === 0) {
    return {
      id: releaseDate.id,
      label: "All",
    };
  }

  return {
    id: releaseDate.id,
    label: `${releaseDate.start}-${releaseDate.end}`,
  };
});

export const sortingCategories = [
  { id: 1, label: "Name" },
  { id: 2, label: "Release" },
  { id: 3, label: "Author" },
  { id: 4, label: "Type" },
];
