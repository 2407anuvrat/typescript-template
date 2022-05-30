import { dummyOutput } from '../../src/Dummy'
import { primeFactor } from '../../src/Dummy'

describe("Dummy Test", () => {
    it("should assert on the dummy output", () => {
        const dummyOutputReturned = dummyOutput("hello");
        expect(dummyOutputReturned).toBe("hellohello");
    })

    it("prime factor of 2 should be 2", () => {
        expect(primeFactor(2)).toEqual([2]);
    })

    it("prime factor of 3 should be 3", () => {
        expect(primeFactor(3)).toEqual([3]);
    })

    it("prime factor of 4 should be 2,2", () => {
        expect(primeFactor(4)).toEqual([2,2]);
    })

    it("prime factor of 8 should be 2,2,2", () => {
        expect(primeFactor(8)).toEqual([2,2,2]);
    })

    it("prime factor of 25 should be 5,5", () => {
        expect(primeFactor(25)).toEqual([5,5]);
    })

    it("prime factor of 100 should be 5,5,2,2", () => {
        expect(primeFactor(100)).toEqual([2,2,5,5]);
    })
        
})

