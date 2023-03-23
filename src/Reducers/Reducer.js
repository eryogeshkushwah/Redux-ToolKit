import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

function nextId(state) {
  return state.length;
}

const mySlice = createSlice({
  name: "myReducer",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [
        ...state,
        {
          id: nextId(state),
          text: action.payload,
          completed: false,
        },
      ];
    },
    deleteTask: (state, action) => {
      return state.filter((mystate) => mystate.id !== action.payload);
    },

    markTaskCompleted: (state, action) => {
      return state.map((mystate) => {
        if (mystate.id !== action.payload) {
          return mystate;
        }
        return {
          ...mystate,
          completed: !mystate.completed,
        };
      });
    },
  },
});

export const { addTask, deleteTask, markTaskCompleted } = mySlice.actions;

export default mySlice.reducer;
