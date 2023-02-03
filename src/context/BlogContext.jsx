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

  //*user
  handleRegister: () => {},
  handleLogin: () => {},
  logout: () => {},
  openModal: false,
  setOpenModal: () => {},
  modalForm: "",
  setModalForm: () => {},
  loggedIn: false,
  token: null,
  user: {},
  setUser: () => {},

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
