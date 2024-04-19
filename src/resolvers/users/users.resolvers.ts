import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../../dtos/models/users/users.model";
import { UserInput } from "../../dtos/inputs/users/users.inputs";

@Resolver(() => User)
export class UsersResolver {
  private users: User[] = [
    { id: 1, name: "John Doe", email: "johndoe@gmail.com", password: "125s" },
    { id: 2, name: "Jane Doe", email: "janedoe@gmail.com", password: "125s" },
    { id: 3, name: "Mike Doe", email: "mikedoe@gmail.com", password: "125s" },
  ];

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.users;
  }

  @Query(() => User)
  async getUser(@Arg("id") id: number): Promise<User | undefined> {
    const user = this.users.find((u) => u.id === id);
    return user;
  }

  @Mutation(() => User)
  async createUser(@Arg("input") input: UserInput): Promise<User> {
    const user = {
      id: this.users.length + 1,
      ...input,
    };
    this.users.push(user);
    return user;
  }
  @Mutation(() => User)
  async updateUser(
    @Arg("id") id: number,
    @Arg("input") input: UserInput
  ): Promise<void> {
    const user = this.users.find((u) => u.id == id);
    if (!user) throw new Error("User not found");
    const updatedUser = {
      ...user, //id
      ...input,
    };
    this.users = this.users.map((u) => (u.id === id ? updatedUser : u));
  }
}
