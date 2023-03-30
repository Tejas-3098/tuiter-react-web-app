import { createSlice } from "@reduxjs/toolkit";

const profile = {
    firstName: 'Tejas',
    lastName: 'Sridhar',
    handle: '@ts3098',
    profilePicture: 'profile.png',
    bannerPicture: 'cover.jpg',
    bio: 'MSCS Graduate Student @northeastern | Python, Java, SQL ,C# | Web Development and Machine Learning',
    website: 'www.linkedin.com',
    location: 'Boston, MA',
    dateOfBirth : '1998-11-30',
    dateJoined: '2012-02-18',
    followingCount: 650,
    followersCount: 573
};

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName
            state.bio = action.payload.bio
            state.dateOfBirth = action.payload.dateOfBirth
            state.location = action.payload.location
            state.website = action.payload.website
        },
    },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;