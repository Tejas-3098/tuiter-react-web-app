import PostItem from "./PostItem.js";
import Homepost from "./Homepost.js";
const HomeScreen = () => {

    return (`

            <ul class="list-group">

            <!-- continue here -->

            ${Homepost.map(post => {

        return (PostItem(post));

    }).join('')

    }

            </ul>

`);

}
export default HomeScreen;
