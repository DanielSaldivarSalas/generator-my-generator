import {
  BaseGenerator,
  FileSystemEntity,
  getDirname,
  TemplateEntity
} from "../base";

interface PromptAnswers {
  generatorName: string;
}

export default class extends BaseGenerator {
  answers!: PromptAnswers;

  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "generatorName",
        message: "What's the Generator Name? ",
        store: false
      }
    ]);

    this.answers = answers;
  }

  writing() {
    const PROJECT_NAME = `generator-${this.answers.generatorName}`;
    const files: FileSystemEntity[] = [
      { currentName: "_gitignore", newName: ".gitignore" },
      { currentName: "tsconfig.json" },
      { currentName: "LICENSE" },
      { currentName: ".mocharc.json" },
      { currentName: "Makefile" },
      { currentName: "src/base.ts" },
      { currentName: "src/app/index.ts" },
      { currentName: "src/wow/index.ts" },
      { currentName: "src/wow/templates/_gitignore" },
      { currentName: "src/app/templates/index.html" },
      { currentName: "src/app/templates/dummyfile.txt" }
    ];

    files.forEach(el => {
      if (el.newName) {
        this.copyFileSystemEntity(
          el.currentName,
          `${PROJECT_NAME}/${el.newName}`
        );
      } else {
        this.copyFileSystemEntity(
          el.currentName,
          `${PROJECT_NAME}/${el.currentName}`
        );
      }
    });

    const templates: TemplateEntity[] = [
      {
        currentName: "package.json",
        data: { generatorName: `${this.answers.generatorName}` }
      },
      {
        currentName: "test/appTest.spec.ts",
        data: { generatorName: `${this.answers.generatorName}` }
      }
    ];

    templates.forEach(el => {
      this.useTemplate(
        el.currentName,
        `${PROJECT_NAME}/${el.currentName}`,
        el.data
      );
    });
  }
}
