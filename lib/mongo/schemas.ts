import mongoose from "mongoose";
import { User } from "../types";

const UserSchema = new mongoose.Schema<User>({
    userName: { type: String, },
    password: { type: String, },
    email: { type: String, },
    role: { type: Number, },
  }, { timestamps: true })
  
  // Duplicate the ID field.
  UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
  });
  
  // Ensure virtual fields are serialised.
  UserSchema.set('toJSON', {
    virtuals: true
  });
  
  export const UserModel = mongoose.models.Users || mongoose.model('Users', UserSchema)