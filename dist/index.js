"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "localhost";
app_1.default.listen(PORT, () => {
    const statusServer = process.env.DEVELOPMENT === "true"
        ? `Server running on http://${HOST}:${PORT}`
        : `Server running on ${process.env.DEPLOY_URL}`;
    console.log(statusServer);
});
