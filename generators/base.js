import Generator from "yeoman-generator";
import { fileURLToPath } from "url";
import path from "path";
function getFilename(metaUrl) {
    return fileURLToPath(metaUrl);
}
export function getDirname(metaUrl) {
    return path.dirname(getFilename(metaUrl));
}
export class BaseGenerator extends Generator {
    copyFileSystemEntity(originalFileSystemEntity, newFileSystemEntity = originalFileSystemEntity) {
        this.fs.copy(this.templatePath(originalFileSystemEntity), this.destinationPath(newFileSystemEntity));
    }
    useTemplate(originalFilename, newFilename = originalFilename, data = {}) {
        this.fs.copyTpl(this.templatePath(originalFilename), this.destinationPath(newFilename), data);
    }
}
//# sourceMappingURL=base.js.map