import { createSlice } from "@reduxjs/toolkit";

const deptSlice = createSlice({
  name: "deptSlice",
  initialState: {
    deprtItem: [],
    totalItem: 0,
  },
  reducers: {
    addItemToDepart(state, action) {
      const newItem = action.payload;

      state.totalItem++;

      state.deprtItem.push({
        deptName: newItem.deptName,
        schoolName: newItem.schoolName,
        shortName: newItem.deptShortName,
        active: newItem.deptStatus,
      });
    },
  },
});
export const deptAction = deptSlice.actions;
export default deptSlice;
