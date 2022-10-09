"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
<<<<<<< HEAD
const PORT = process.env.PORT||3001
=======
const PORT = process.env.PORT || 3001
>>>>>>> faeff93f0867a012a5b83cf0dd5b3e0416b550b7
app_1.default.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map
