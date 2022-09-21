// imports go at the top of the JS file
import { profs } from "./modules/data.js";
// this is an IIFE (immediately invoked function expression)
// this is great for encapsulating code / making it private
// and is also a JavaScript programming pattern (the Module pattern)
(() => {
    console.log('fired');

    // get a reference to the template's contents and the target container
    // into which we'll clone a copy of the markup
    let theTemplate = document.querySelector("#user-template").content,
        theTeam = document.querySelector('.team-section');

    function changeCopy() {
        // parse the top-level props from the profs object (the prof names)
        let theProfs = Object.keys(profs); 
        
        // ['Trevor', 'John', 'Joe', 'Justin']

        theProfs.forEach(prof => {
            debugger;
            // make a copy of the contents of the template tag
            let  panel = theTemplate.cloneNode(true),
                 containers = panel.firstElementChild.children; // the section tag's contents
            // put the prof data where it needs to go (just text for now)    
            containers[0].textContent = profs[prof].name;
            containers[1].textContent = profs[prof].role;

            // paste the prof markup into the team section on the page
            theTeam.appendChild(panel);
        })        
    }

    changeCopy();
})();