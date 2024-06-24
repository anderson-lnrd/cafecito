import { Injectable } from "@angular/core";
import { Mapper } from "../mapper.interface";
import { User } from "./User";
import { IUser } from "./IUser";

@Injectable({
    providedIn: "root",
})
export class ProductMapper implements Mapper<User> {

    map(record: IUser): User {
        return new User(
            record.id,
            record.username,
            record.firstName,
            record.lastName,
            record.email,
            record.isAuthenticated,
            record.isOnline,
            record.created,
            record.avatar ? record.avatar : undefined
        )
    }
}