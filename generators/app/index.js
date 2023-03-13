import { BaseGenerator, getDirname } from "../base.js";
import path from "path";
export default class extends BaseGenerator {
    answers;
    initializing() {
        this.composeWith(path.resolve(getDirname(import.meta.url), "../wow"), {
            arguments: [this.options.projectName]
        });
    }
    async prompting() {
        const answers = await this.prompt([
            {
                type: "confirm",
                name: "someAnswer",
                message: "Would you like to enable this option?",
                default: true
            },
            {
                type: "input",
                name: "username",
                message: "What is your username?",
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
    }
    writing() {
        const files = [
            { currentName: "dummyfile.txt" },
            //  { currentName: "_gitignore", newName: ".gitignore" }
        ];
        files.forEach(el => {
            if (el.newName) {
                this.copyFileSystemEntity(el.currentName, el.newName);
            }
            else {
                this.copyFileSystemEntity(el.currentName);
            }
        });
        const templates = [
            { currentName: "index.html", newName: "public/index.html", data: { title: this.answers.title } }
        ];
        templates.forEach(el => {
            this.useTemplate(el.currentName, el.newName, el.data);
        });
    }
}
;
//# sourceMappingURL=index.js.map