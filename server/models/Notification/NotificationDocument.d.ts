import mongoose from "mongoose";
import Notification from "../../../client/src/models/Notification";
export default interface NotificationDocument extends Notification, mongoose.Document {}