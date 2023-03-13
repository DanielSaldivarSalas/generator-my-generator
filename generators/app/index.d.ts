import { BaseGenerator } from "../base.js";
interface PromptAnswers {
    someAnswer: string;
    username: boolean;
    title: string;
}
export default class extends BaseGenerator {
    answers: PromptAnswers;
    initializing(): void;
    prompting(): Promise<void>;
    writing(): void;
}
export {};
//# sourceMappingURL=index.d.ts.map