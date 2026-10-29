import { useState } from 'react';
function HideAndShow(){
    const [isVisible, setIsVisible] = useState(true);
    function toggleVisibility() {
      let  button = document.querySelector("button");
        if(isVisible){
            setIsVisible(false);
            button.innerText = "Show";
        } else {
            setIsVisible(true);
            button.innerText = "Hide";
        }

    }
    
return(
    <div>
        {isVisible?<p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>:""}
        <button onClick={toggleVisibility}>Hide</button>
    </div>
);
}
export default HideAndShow;