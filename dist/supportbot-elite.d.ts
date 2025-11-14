interface SupportbotEliteQuery {
    message: string;
    file: File | undefined;
    sessionId: string | undefined;
}
export declare class SupportbotElite {
    userId: string;
    apiKey: string;
    constructor(userId: string, apiKey: string);
    query({ message, file, sessionId }: SupportbotEliteQuery): Promise<any>;
}
export {};
