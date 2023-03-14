import { assert } from "chai";
import { createHelpers } from "yeoman-test";
import path from "path";
import * as fs from "fs";


const PROJECT_NAME = "project";


describe("generator-<%= generatorName %>:app", () => {
  let runResult: any;
  const helpers = createHelpers({});

  beforeEach(async () => {
    runResult = await helpers
      .create(path.resolve(path.resolve(), "generators/app"), {}, {})
      .withPrompts({ generatorName: PROJECT_NAME })
      .run();
  });

  afterEach(() => {
    if (runResult !== undefined) {
      runResult.restore();
    }
  });

  it("creates files", () => {
    assert(fs.existsSync(`generator-${PROJECT_NAME}/dummyfile.txt`), "dummyfile should be created");
    assert(fs.existsSync(".gitignore"), ".gitignore should be created");
  });

});
