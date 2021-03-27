import bcrypt from "bcrypt-nodejs";
import mongoose, { Model, Schema } from "mongoose";
import UserDocument, { ComparePasswordFunction } from "./UserDocument";
export const userSchema: Schema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    name: { type: String },
    OTP: String,
    otpExpireTime: Date,
}, { timestamps: true });

/**
 * Password hashing & Signing Url middleware.
 */
userSchema.pre("save", function save(next: any) {
    const user: any = this;
    // email cannot have capital character
    if (user && user.email) {
        user.email = user.email.toLowerCase();
    }
    // Stripe signing params for Avatar Url
    
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(10, (err: any, salt: any) => {
        if (err) { return next(err); }
            // tslint:disable-next-line:no-null-keyword
            bcrypt.hash(user.password as string, salt, null, (err: mongoose.Error, hash: any) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});



const comparePassword: ComparePasswordFunction = function (this: any, candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
        cb(err, isMatch);
    });
};

userSchema.methods.comparePassword = comparePassword;

const UserCollection: Model<UserDocument> = mongoose.model("User", userSchema);
export default UserCollection;
