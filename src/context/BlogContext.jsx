import { createContext } from "react";

export const BlogContext = createContext({
    blog:[],
    blogIndex:[],

    movies:[],
    setMovies: () => {},
    
    books:[],
    
    gallery:[],
})
//   loading: false,
//   setLoading: () => {},
//   setContacts: () => {},
//   setFilteredContacts: () => {},
//   contacts: [],
//   filteredContacts: [],
//   contactQuery: {},
//   groups: [],
//   deleteContact: () => {},
//   createContact: () => {},
//   contactSearch: () => {},
