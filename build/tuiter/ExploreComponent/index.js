import ComponentListItem from "./ComponentListItem.js"
import posts from "./posts.js"
const ExploreComponent = () => {
    return `
<div>
    ${posts.map(posts => {
        return (ComponentListItem(posts));
    }).join('')}
    </div>
`;
};
export default ExploreComponent;