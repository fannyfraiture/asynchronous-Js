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