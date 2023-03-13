import Generator from "yeoman-generator";
export interface FileSystemEntity {
    currentName: string;
    newName?: string;
}
export interface TemplateEntity {
    currentName: string;
    data: {
        [key: string]: any;
    };
    newName?: string;
}
export declare function getDirname(metaUrl: string): string;
export declare class BaseGenerator extends Generator {
    copyFileSystemEntity(originalFileSystemEntity: string, newFileSystemEntity?: string): void;
    useTemplate(originalFilename: string, newFilename?: string, data?: object): void;
}
//# sourceMappingURL=base.d.ts.map