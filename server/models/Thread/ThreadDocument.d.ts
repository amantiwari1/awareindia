import mongoose from "mongoose";
import Thread from "../../../client/src/models/Thread";
export default interface ThreadDocument extends Thread, mongoose.Document {}