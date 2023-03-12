import { createSlice, configureStore } from "@reduxjs/toolkit";
import { InitialState } from "../Types";
import { getHomePageVideos } from "./reducers/getHomePageVideos";

const initialState: InitialState = {
  videos: [],
  currentlyPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideos: [],
};

const YoutubeSlice = createSlice({
  name: "youtubeClone",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
      // state.videos = action.payload.parsedData;
      // state.nextPageToken = action.payload.nextPageToken
    });
  },
});

export const store = configureStore({
  reducer: {
    youtubeClone: YoutubeSlice.reducer,
  },
});

// export const reducers = YoutubeSlice.actions;
// export default YoutubeSlice.reducer;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
