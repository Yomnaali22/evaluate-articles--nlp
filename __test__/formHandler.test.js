import { handleSubmit } from "../src/client/js/formHandler"




describe("Testing the handleSubmite existence ", () => {
    test("Testing handleSubmit() function",() => {
        expect(handleSubmit).toBeDefined();
    })
});
    
    describe("Testing the handleSubmit if it's a function or not", () => {
        test("Testing handleSubmit() function",() => {
            expect(typeof(handleSubmit)).toBe("function");
        })
    });