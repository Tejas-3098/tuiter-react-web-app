import WhoToFollowListItem from "./WhoToFollowListItem.js"
import who from "./who.js"
const WhoToFollow = () => {
    return `
    <div>
    ${who.map(who => {
        return (WhoToFollowListItem(who));
    }).join('')}
    </div>
`;
};
export default WhoToFollow;