import { assert } from "chai";
import { createHelpers } from "yeoman-test";
import path from "path";
import * as fs from "fs";

const PROJECT_NAME = "generator-wowers";

describe("generator-my-generator:app", () => {
  let runResult: any;
  const helpers = createHelpers({});

  beforeEach(async () => {
    runResult = await helpers
      .create(path.resolve(path.resolve(), "generators/app"), {}, {})
      .withPrompts({ generatorName: "wowers" })
      .run();
  });

  afterEach(() => {
    if (runResult !== undefined) {
      runResult.restore();
    }
  });


  it("creates configuration files", () => {
    assert(
      fs.existsSync(`${PROJECT_NAME}/.gitignore`),
      ".gitignore should be created"
    );

    assert(
      fs.existsSync("generator-wowers/LICENSE"),
      "LICENSE should be created"
    );

    assert(
      fs.existsSync(`${PROJECT_NAME}/tsconfig.json`),
      "tsconfig should be created"
    );

    assert(
      fs.existsSync(`${PROJECT_NAME}/.mocharc.json`),
      ".mocharc should be created"
    );

  });

  it("creates files from templates", () => {
    assert(
      fs.existsSync(`${PROJECT_NAME}/package.json`),
      "package should be created"
    );

    assert(
      fs.existsSync(`${PROJECT_NAME}/test/appTest.spec.ts`),
      " should be created"
    );
  });

  it("Create src files", () => {

    assert(
      fs.existsSync(`${PROJECT_NAME}/src/base.ts`),
      "src/base.ts should be created"
    );

    assert(
      fs.existsSync(`${PROJECT_NAME}/src/app/index.ts`),
      "src/app/index.ts should be created"
    );


    assert(
      fs.existsSync(`${PROJECT_NAME}/src/wow/index.ts`),
      "src/wow/index.ts should be created"
    );


  });

  it("Create template files", () => {

    assert(
      fs.existsSync(`${PROJECT_NAME}/src/wow/templates/_gitignore`),
      "src/wow/templates/_gitignore should be created"
    );

    assert(
      fs.existsSync(`${PROJECT_NAME}/src/app/templates/index.html`),
      "src/app/templates/index.html be created"
    );

    assert(
      fs.existsSync(`${PROJECT_NAME}/src/app/templates/dummyfile.txt`),
      "src/app/templates/dummyfile.txt should be created"
    );


  });

  it("Create Makefile", () => {

    assert(
      fs.existsSync(`${PROJECT_NAME}/Makefile`),
      "Makefile should be created"
    );

  });

});

