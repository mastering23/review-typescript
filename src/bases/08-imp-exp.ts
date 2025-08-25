import { heroes , type Hero , Owner } from "../data/heroes.data"

export const print = console.log;



const getHeroesById = (id: number): Hero | undefined =>{

  const hero = heroes.find((hero)=>{
    return hero.id === id;
  });

  return hero;
}

// print(getHeroesById(3));

// -task create a function to get heroes by owner 
// - filter heroes by their properties
// - @param owner filter by DC | Marvel
// - Returns array with the heroes owner
// - console.log from main.ts 

export const getHeroesByOwner = (owner: Owner ) =>{
  const hero = heroes.filter((hero)=>{
    return hero.owner === owner;
  });
  return hero;
}

