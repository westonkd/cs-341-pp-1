"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validator_1.default.isEmail, "Email address is not valid"],
    },
    events: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Event" }],
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
