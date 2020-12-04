// export interface Hero {
//     id: number;
//     name: string;
// }
export class Hero {
    constructor(
        public id:number,
        public name: string,
        public power: string,
        public alterEgo?: string /** ? -> chi thuoc tinh nay co the co hoac khong */
    ) { }
}