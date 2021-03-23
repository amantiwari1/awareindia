import mongoose from "mongoose";
import Comment from "../../../client/src/models/Comment";
export default interface CommentDocument extends Comment, mongoose.Document {}