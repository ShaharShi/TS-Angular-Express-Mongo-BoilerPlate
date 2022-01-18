import { model, Schema } from "mongoose";
import { IUser } from "../models/user";

// export const UserSchema = new Schema<IUser>({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     personalID: { type: Number, required: true, unique: true, minlength: 9, maxlength: 9 },
//     password: { type: String, required: true },
//     address: {
//         city: { type: String, required: true },
//         street: { type: String, required: true },
//     },
//     isAdmin: { type: Boolean, default: false },
// }, { timestamps : { updatedAt: false }} )

// export const User = model<IUser>('User', UserSchema);