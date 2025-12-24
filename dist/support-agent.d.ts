interface SupportAgentQuery {
    message: string;
    file: File | undefined;
    sessionId: string | undefined;
}
export declare class SupportAgent {
    userId: string;
    apiKey: string;
    constructor(userId: string, apiKey: string);
    query({ message, file, sessionId }: SupportAgentQuery): Promise<any>;
}
export {};
