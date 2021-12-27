import {priceToString} from "./price-to-string";

describe("priceToString", () => {
   it("should divide 100 123", () => {
       expect(priceToString(100123)).toEqual("100 123")
   });

   it("should divide 10 123", () => {
       expect(priceToString(10123)).toEqual("10 123")
   });

   it("should divide 1 123", () => {
       expect(priceToString(1123)).toEqual("1 123")
   });

   it("should not divide 123", () => {
       expect(priceToString(123)).toEqual("123")
   });

   it("should not divide 12", () => {
       expect(priceToString(12)).toEqual("12")
   });
});
