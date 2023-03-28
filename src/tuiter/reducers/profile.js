
import owner from '../data/profile.json';

const initialState = {
    profile: owner
};

const profile = (state = initialState,action) => {
    switch (action.type) {
        case 'fetch-profile':
            return({
                profile: action.profile
            })

        case 'save' :
            console.log("Hello I am in Save-Profile");
            if(action.newInput.username){
                initialState.profile['username'] = action.newInput['username'];
            }
            if(action.newInput.bio){
                initialState.profile['bio'] = action.newInput['bio'];
            }
            if(action.newInput.location){
                initialState.profile['location'] = action.newInput['location'];
            }
            if(action.newInput.dob){
                initialState.profile['dob'] = action.newInput['dob'];
            }
            return({
                ...state
            });
        default:
            return (state);
    };

};

export default profile;