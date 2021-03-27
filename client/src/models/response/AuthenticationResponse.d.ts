import User from "../User.d";
import Notification from "../Notification.d";
export default interface AuthenticationResponse {
    user: User;
    accessToken?: string;
    others: User[]; // Get all users' info after authenticate
} 