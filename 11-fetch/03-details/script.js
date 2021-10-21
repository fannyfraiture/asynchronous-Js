/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");
    const heroID = document.querySelector("#hero-id")

    document.querySelector('#run').addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes/"+heroID.value);
        const responseJson = await response.json()

        let tplImport = document.importNode(tpl.content, true)
        tplImport.querySelector('.name').textContent = responseJson.name 
        tplImport.querySelector('.alter-ego').textContent = responseJson.alterEgo
        tplImport.querySelector('.powers').textContent = responseJson.abilities 
        target.appendChild(tplImport) 
        console.log(tplImport)



        // Nico solution 

        const id = +heroID.value; //"+" convert string to a number

        if (isNaN(id) || id === 0) {
            console.error("Invalid id!");
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/heroes/${id}`);
            const {name, alterEgo, abilities} = await response.json();

            const elt = tpl.cloneNode(true).content;

            elt.querySelector(".name").innerText = name;
            elt.querySelector(".alter-ego").innerText = alterEgo;
            elt.querySelector(".powers").innerText = abilities.join(", ");

            target.firstElementChild
                ? target.replaceChild(elt, target.firstElementChild)
                : target.appendChild(elt);
        } catch (err) {
            console.error(`Unknown hero with id: ${id}!`);
        }
        
    });

})();

/*
(() => {

    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");
    const input = document.querySelector("#hero-id")

    document.querySelector('#run').addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes/"+input.value);
        const data = await response.json()
        
        let clone = document.importNode(tpl.content, true)
        clone.querySelector('.name').textContent = data.name
        clone.querySelector('.alter-ego').textContent = data.alterEgo
        clone.querySelector('.powers').textContent = data.abilities
        target.appendChild(clone) 
        
    });
})();
*/