import { assert } from "chai";
import { createHelpers } from "yeoman-test";
import path from "path";
import * as fs from "fs";


describe("generator-my-generator:app", () => {
  let runResult: any;
  const helpers = createHelpers({});

  beforeEach(async () => {
    runResult = await helpers
      .create(path.resolve(path.resolve(), "generators/app"), {}, {})
      .withPrompts({ someAnswer: true })
      .run();
  });

  afterEach(() => {
    if (runResult !== undefined) {
      runResult.restore();
    }
  });


  it("creates files", () => {
    assert(
      fs.existsSync("dummyfile.txt"),
      "dummyfile should be created"
    );
    assert(
      fs.existsSync(".gitignore"),
      ".gitignore should be created"
    );


  });

});

