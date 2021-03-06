/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: add an element
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
  const inputName = document.querySelector("#hero-name");
  const inputAlterEgo = document.querySelector("#hero-alter-ego");
  const inputPower = document.querySelector("#hero-powers");

  document.querySelector("#run").addEventListener("click", async () => {
    try {
      let abilities = inputPower.value.split(" ");
      const res = await fetch("http://localhost:3000/heroes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputName.value,
          alterEgo: inputAlterEgo.value,
          abilities: abilities,
        }),
      });
      if(!res.ok) throw new Error(res.statusText)
      const getAll = await fetch("http://localhost:3000/heroes");
      if(!res.ok) throw new Error(res.statusText)
      success();
      console.log(await getAll.json());
    } catch (err) {
        error()
        console.error('Something went WRONG !',err);
    }
  });
})();