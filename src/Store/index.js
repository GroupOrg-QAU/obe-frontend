import { configureStore } from "@reduxjs/toolkit";
import deptSlice from "./Institue/DepartSlice";
const store = configureStore({
  reducer: { dept: deptSlice.reducer },
});

export default store;
