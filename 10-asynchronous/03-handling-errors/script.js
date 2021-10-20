/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("#run").addEventListener("click", () => {
        window.lib.getPersons( (error, arrayOfPeople) => {
            //if else
            //if(error) {
                //console.error(error)
            //} elses {
                //console.log(arrayOfPeople)
            //}
    try {
        console.log(arrayOfPeople)
    }catch(error) {
        console.error(error)
        }
        });
    });
    })();
