let data = 42; //typescript is smart enough to interpret data
let x = 'z';

export interface Duck 
{
    name: string
    numLegs: number,
    makeSound: (sound: string) => void;
}

const duck1 : Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2 : Duck = {
    name: 'brad',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

duck1.makeSound('quack');

export const ducks = [duck1, duck2];
