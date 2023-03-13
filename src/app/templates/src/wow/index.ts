import { BaseGenerator, FileSystemEntity } from "../base.js";


const files: FileSystemEntity[] = [
  //  { currentName: "dummyfile.txt" },
  { currentName: "_gitignore", newName: ".gitignore" }
];

export default class WowGenerator extends BaseGenerator {

  initializing() {

  }

  prompting() {
    // Have Yeoman greet the user.
    const prompts = [
      {
        type: "confirm",
        name: "someAnswer",
        message: "Would you like to enable this option?",
        default: true
      },
      {
        type: "input",
        name: "username",
        meessage: "LOL",
        store: true
      }
    ];

  }

  writing() {
    files.forEach(el => {
      if (el.newName) {
        this.copyFileSystemEntity(el.currentName, el.newName);
      } else {
        this.copyFileSystemEntity(el.currentName);
      }
    });

  }

};
