import mongoose from "mongoose";
import { Auditory, User } from "../types";

const UserSchema = new mongoose.Schema<User>(
  {
    userName: { type: String, unique: true },
    password: { type: String },
    email: { type: String },
    department: { type: String },
    name: { type: String },
    role: { type: Number },
    identificationCard: { type: String },
    dateBirth: { type: String },
    age: { type: Number },
    dateAdmission: { type: String },
    position: { type: String },
    cellphone: { type: String },
    holidays: { type: String },
    yearsWorked: { type: String },
    bussines: { type: String }, 
    discount: { type: String },
    count: { type: String }, 
  },
  { timestamps: true }
);

// Duplicate the ID field.
UserSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
UserSchema.set("toJSON", {
  virtuals: true,
});

export const UserModel =
  mongoose.models.Users || mongoose.model("Users", UserSchema);

const AuditorySchema = new mongoose.Schema<Auditory>(
  {
    date: { type: String },
    user: { type: String },
    action: { type: String },
  },
  { timestamps: true }
);

// Duplicate the ID field.
AuditorySchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
AuditorySchema.set("toJSON", {
  virtuals: true,
});

export const AuditoryModel =
  mongoose.models.Auditory || mongoose.model("Auditory", AuditorySchema);
