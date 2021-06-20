import { chop } from "./chop.js";

const testData = {
    bread: "baguette",
    cheese: "brie cheese",
};

const myTemplate = "I like to eat {{bread}} and {{cheese}}";
chop(myTemplate, testData);