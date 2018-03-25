export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public address: string,
        public zipcode: string,
        public newsletter?: boolean,
        public gender?: string
    ){}
}