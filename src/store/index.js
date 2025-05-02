import { createStore } from "vuex"; // importing createStore function from vuex to create a new store
import axios from "axios"; // Importing axios for making HTTP requests

export default createStore({
  state: {
    users: [], // Array to store the users data
  },

  getters: {
    // we're defining a function that would get us the total number of users
    totalUsers(state) {
      return state.users.length; //totalUsers is a getter function that takes the state as an argument and returns the length of users array
     
    },
    
  },

  mutations: {
    // we're defining a function called SET_USERS that will set the users data in the state
    SET_USERS(state, users) { //SET_USERS is a mutation function that takes the state and users as arguments and sets the users array in the state to the employees argument
     state.users = users; //we're setting the users array in the state to the users argument

    },
  },

  actions: {
    // we're definning a function called fetchUsers that will make an HTTP request to fetch users data
    async fetchUsers({ commit }) {
      const response = await axios.get("https://dummyjson.com/users"); //we're making an HTTP GET request to given the URL
      //  and storing the response in a variable called response
      console.log(response.data.users)
      commit("SET_USERS", response.data.users); //After fetching the data, we call the SET_USERS mutation function to set the users
    },
  },
 });
