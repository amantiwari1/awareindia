import bcrypt from "bcrypt";
import mongoose, { Model, Schema } from "mongoose";
import UserDocument from "./UserDocument";
export const userSchema: Schema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
    name: { type: String },
  },
  { timestamps: true }
);

/**
 * Password hashing & Signing Url middleware.
 */
userSchema.pre<UserDocument>("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;

  next();
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<Boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.comparePassword = async function (
  password: string
): Promise<Boolean> {
  return await bcrypt.compare(password, this.password);
};

const UserCollection: Model<UserDocument> = mongoose.model("User", userSchema);
export default UserCollection;
