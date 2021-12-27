import {priceToString} from "./price-to-string";

describe("priceToString", () => {
   it("should divide 100 000", () => {
       expect(priceToString(100000)).toEqual("100 000")
   })
});
