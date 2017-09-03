
import { Facebook }

export class User {
 constructor(
        public displayName:string,
        public email:string,
        public image: string,
        public facebook:Facebook
    ){}

    static fromJSON({$key, name, email, facebook }) {
        return new User($key, name, email, facebook);
    }

    static fromJSONArray(json:any[]): User[]{
        console.log("User::fromJSONArray", json)
        return json.map(User.fromJSON);
    }
}
