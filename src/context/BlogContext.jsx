import { createContext } from "react";

export const BlogContext = createContext({
  //*Blog
  blog: [],
  blogIndex: [],
  movies: [],
  books: [],
  gallery: [],

  loading: false,
  setLoading: () => {},

  //*Navbar
  openNav: false,
  setOpenNav: () => {},
 
  //*Navbar
  openLogin: false,
  setOpenLogin: () => {},
});
//   setContacts: () => {},
//   setFilteredContacts: () => {},
//   contacts: [],
//   filteredContacts: [],
//   contactQuery: {},
//   groups: [],
//   deleteContact: () => {},
//   createContact: () => {},
//   contactSearch: () => {},
