import { VisibilityFilters } from "common/enums";

const initialState = VisibilityFilters.SHOW_ALL;

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}
