"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var DateTimePicker_1 = __importDefault(require("./Components/DateTimePicker"));
var react_1 = __importDefault(require("react"));
var eventsData = [
    {
        id: "1",
        date: new Date("2020-06-01T09:00:00"),
        email: "asd@asd.com",
    },
    {
        id: "2",
        date: new Date("2022-04-20T12:00:00"),
        email: "papaa@asd.com",
    },
    {
        id: "3",
        date: new Date("2022-04-21T13:00:00"),
        email: "asd",
    },
];
function App() {
    return react_1.default.createElement(DateTimePicker_1.default, { eventsData: eventsData });
}
exports.default = App;
//# sourceMappingURL=App.js.map