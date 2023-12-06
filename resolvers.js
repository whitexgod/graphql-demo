import { data } from "../Data.js";

export const resolvers = {
  Query: {
    users: () => {
      return data.userList;
    },

    user: (parent, args) => {
      const id = args.id;
      const user = data.userList.find((eachUser) => eachUser.id === Number(id));
      return user;
    },

    movies: () => {
      return data.movieList;
    },

    movie: (parent, args) => {
      const id = args.id;
      const movie = data.movieList.find(
        (eachMovie) => eachMovie.id === Number(id)
      );
      return movie;
    },
  },

  User: {
    favoriteMovies: () => {
      return data.movieList.filter((movie) => movie.year < 2000);
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      user.id = data.userList[data.userList.length - 1].id + 1;
      data.userList.push(user);
      return user;
    },

    updateUserName: (parent, args) => {
      const updateName = args.input;
      console.log(updateName);
      const user = data.userList.find((user) => user.name === updateName.name);
      user.username = updateName.username;
      return user;
    },
  },
};
