import { should, describe, it } from "vitest";
import * as cp from "child_process";
import * as os from "os";
import path from "path";

should();


describe('sample', function () {
    it('should print to stdout thrice', function () {
        const spawn = cp.spawnSync("ts-node-esm", [
            path.join(__dirname, "..", "..", "tests","integration","io","sample.ts")
        ]);
        const actual = spawn.stdout
                            .toString()
                            .split(os.EOL)
                            .filter((x) => x.length !== 0);
        const expected = ["water", "water", "water"];
        actual.should.deep.equal(expected);
    });
});
