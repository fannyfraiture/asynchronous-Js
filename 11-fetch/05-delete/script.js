/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: delete an element
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    const input = document.querySelector("#hero-id")

    document.querySelector('#run').addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes/"+input.value, {
            method: 'DELETE'
        });
        const data = await response.json()
        console.log(data)
    });
})();
