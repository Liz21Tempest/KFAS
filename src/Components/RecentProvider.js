import RecentlyWatched from "./RecentContext";
import { useEffect, useState, useReducer } from "react";
import Recent from "./Recent";

function reduce(state, action) {
  switch (action.type) {
    case "addVideo":
      return {
        ...state,
        recentList: [...state.recentList, action.payload.recent],
        currentanime: action.payload.current
      };

      break;

    default:
      break;
  }
}
const initialState = {
  recentList: [],
  currentanime: {}
};

export default function RecentlyWatchedProvider({ children }) {
  const [valueuser, setValueuser] = useState();
  const [state, dispatch] = useReducer(reduce, initialState);
  return (
    <RecentlyWatched.Provider value={[state, dispatch]}>
      {children}
    </RecentlyWatched.Provider>
  );
}
