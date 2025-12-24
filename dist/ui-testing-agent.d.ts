interface UITestingAgentQuery {
    message: string;
    sessionId: string | undefined;
}
export declare class UITestingAgent {
    userId: string;
    apiKey: string;
    constructor(userId: string, apiKey: string);
    query({ message, sessionId }: UITestingAgentQuery): Promise<any>;
}
export {};
