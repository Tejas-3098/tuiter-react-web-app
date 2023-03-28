import posts from '../data/tuits.json';

const initialState = {
    tuits: posts
}

const tuits = (state = initialState, action) => {
    switch (action.type) {
        case 'like-tuit':
            return ({
                tuits: state.tuits.map(tuit => {
                    if(tuit._id === action.tuit._id) {
                        if(tuit.liked === true) {
                            tuit.liked = false;
                            tuit.stats.likes--;
                        } else {
                            tuit.liked = true;
                            tuit.stats.likes++;
                        }
                        return tuit;
                    } else {
                        return tuit;
                    }
                })
            });
            // eslint-disable-next-line no-unreachable
            break;
        case 'delete-tuit':
            return ({
                tuits: state.tuits.filter(tuit => tuit._id !== action.tuit._id)
            })
            // eslint-disable-next-line no-unreachable
            break;
        case 'create-tuit':
            const tuit = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "https://pbs.twimg.com/profile_images/966372680306868224/60wfGe9e.jpg",
                "logo-image": "https://pbs.twimg.com/profile_images/966372680306868224/60wfGe9e.jpg",
                "stats": {
                    "comments": 123,
                    "retuits": 234,
                    "likes": 345
                },
            };
            return ({
                tuits: [
                    tuit,
                    ...state.tuits,
                ]
            });
            // eslint-disable-next-line no-unreachable
            break;
        default:
            return(state);
    }
};

export default tuits;