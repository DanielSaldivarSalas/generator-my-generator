import { assert } from "chai";
import { createHelpers } from "yeoman-test";
import path from "path";
import * as fs from "fs";

describe("Wow Subcommand", () => {
  let runResult: any;
  const helpers = createHelpers({});

  beforeEach(async () => {
    runResult = await helpers
      .create(path.join(path.resolve(), "generators/wow"), {}, {})
      //.withArguments([PROJECT_NAME])
      .withPrompts({ someAnswer: true })
      //.withOptions({
      //  report: true
      //})
      .run();
  });

  afterEach(() => {
    if (runResult !== undefined) {
      runResult.restore();
    }
  });

  it("should generate .gitignore", () => {
    assert(
      fs.existsSync(`.gitignore`),
      `.gitignore file should be created`
    );


  });
});
