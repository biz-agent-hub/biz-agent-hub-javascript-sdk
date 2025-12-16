interface BrowserTestingAgentQuery {
    message: string;
    sessionId: string | undefined;
}
export declare class BrowserTestingAgent {
    userId: string;
    apiKey: string;
    constructor(userId: string, apiKey: string);
    query({ message, sessionId }: BrowserTestingAgentQuery): Promise<any>;
}
export {};
