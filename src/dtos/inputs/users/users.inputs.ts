import { Field, InputType } from "type-graphql";
import { User } from "../../models/users/users.model";

@InputType()
export class UserInput implements Pick<User, "email"|"password">{
    @Field()
    email!:string
    @Field()
    password!:string
    @Field()
    name!:string
}