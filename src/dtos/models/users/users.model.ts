import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User{
    @Field()
    id!:number;
    @Field()
    name!:String;
    @Field()
    email!:String;
    @Field()
    password!:String;
}
