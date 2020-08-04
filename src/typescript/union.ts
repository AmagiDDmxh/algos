interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird {
  return {} as Fish
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.fly();    // errors