import { transformString } from './strings.utils';

const string1 : string = "a";
const string2 : string = "general_observation_";

describe("utils function transformString", () => {
    it("should transform the input string in the correct way", () => {
        expect(transformString(string1)).toBe("A");
        expect(transformString(string2)).toBe("General observation ");
    })
})