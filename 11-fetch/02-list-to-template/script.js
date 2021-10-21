/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: list to template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");

    document.querySelector("#run").addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes");

        let heroes = await response.json()                
                
        for(let xman of heroes) {
            let cloneTemplate = document.importNode(tpl.content, true)
    
            let name = cloneTemplate.querySelector(".name")
            let alterEgo = cloneTemplate.querySelector(".alter-ego")
            let powers = cloneTemplate.querySelector(".powers")

            name.textContent = xman.name
            alterEgo.textContent = xman.alterEgo
            powers.textContent = xman.abilities

            target.appendChild(cloneTemplate)
        }
                
    });
})();

/*(() => {

    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");

    document.querySelector("#run").addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes");
        const data = await response.json()
        
        data.forEach(hero => {
            let clone = document.importNode(tpl.content, true)
            clone.querySelector('.name').textContent = hero.name
            clone.querySelector('.alter-ego').textContent = hero.alterEgo
            clone.querySelector('.powers').textContent = hero.abilities
            target.appendChild(clone) 
        });
    });
})();*/