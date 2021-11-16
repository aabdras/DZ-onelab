export class User {
  constructor(public name: string, public login: string, public password:string,
              public type:string[],
              public movements:number[],
              public movementsDates:(string|null)[]) {}
}
