import { chop } from "./chop.js";

const testData = {
    bread: "bread",
    cheese: "brie cheese",
};

const myTemplate = "I like to eat {{bread}} and {{cheese}}";
chop(myTemplate, testData);