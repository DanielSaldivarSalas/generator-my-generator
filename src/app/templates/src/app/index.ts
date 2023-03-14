import {
  BaseGenerator,
  FileSystemEntity,
  getDirname,
  TemplateEntity
} from "../base.js";

import path from "path";

interface PromptAnswers {
  generatorName: boolean;
  title: string;
  projectName: string;
}

export default class extends BaseGenerator {
  answers!: PromptAnswers;

  initializing() {
  }

  async prompting() {
    const answers = await this.prompt([
      /*{
        type: "confirm",
        name: "someAnswer",
        message: "Would you like to enable this option?",
        default: true
      }, */
      {
        type: "input",
        name: "generatorName",
        message: "What's the sub Generator Name? ",
        store: false
      },
      {
        type: "input",
        name: "title",
        message: "tile: ",
        store: false
      }
    ]);

    this.answers = answers;

    const PROJECT_NAME = `generator-${this.answers.generatorName}`;

    this.answers.projectName = PROJECT_NAME;

    this.composeWith
    this.composeWith(path.resolve(getDirname(import.meta.url), "../wow"), {
      arguments: [this.options.projectName],

    });

  }

  writing() {
    const files: FileSystemEntity[] = [
      { currentName: "dummyfile.txt" }
      //  { currentName: "_gitignore", newName: ".gitignore" }
    ];

    files.forEach(el => {
      if (el.newName) {
        this.copyFileSystemEntity(el.currentName, el.newName);
      } else {
        this.copyFileSystemEntity(el.currentName, `${this.answers.projectName}/${el.currentName}`);
      }
    });

    const templates: TemplateEntity[] = [
      {
        currentName: "index.html",
        newName: "public/index.html",
        data: { title: this.answers.title }
      }
    ];

    templates.forEach(el => {
      this.useTemplate(el.currentName, `${this.answers.projectName}/${el.newName}`, el.data);
    });
  }
}
