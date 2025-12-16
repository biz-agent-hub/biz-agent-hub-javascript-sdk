interface ScrapAgentQuery {
    message: string;
    sessionId: string | undefined;
}
export declare class ScrapAgent {
    userId: string;
    apiKey: string;
    constructor(userId: string, apiKey: string);
    query({ message, sessionId }: ScrapAgentQuery): Promise<any>;
}
export {};
