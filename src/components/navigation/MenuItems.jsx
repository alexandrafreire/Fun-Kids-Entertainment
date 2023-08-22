import { Auth } from "aws-amplify";

export const MenuItemsExplore = [
  {
    title: "Indoor Activities",
    path: "/Explore/IndoorActivities",
    cName: "dropdown-link",
  },
  {
    title: "Outdoor Activities",
    path: "/Explore/OutdoorActivities",
    cName: "dropdown-link",
  },
  {
    title: "Culture & Shows",
    path: "/Explore/ConcertsShows",
    cName: "dropdown-link",
  },
];

export const MenuItemsOnTheWay = [
  {
    title: "Games",
    path: "/OnTheWay/Games",
    cName: "dropdown-link",
  },
  {
    title: "Movies & TvShows",
    path: "/OnTheWay/MoviesTvShows",
    cName: "dropdown-link",
  },
  {
    title: "Books",
    path: "/OnTheWay/Books",
    cName: "dropdown-link",
  },
];

export const MenuItemsUsersProfile = [
  {
    title: "Profile Settings",
    path: "/UsersProfile",
    cName: "dropdown-link",
  },
  {
    title: "Sign Out",
    path: "/",
    cName: "dropdown-link",
    onClick: async () => {
      try {
        await Auth.signOut();
      } catch (error) {
        console.error("Error signing out:", error);
      }
    },
  },
];
