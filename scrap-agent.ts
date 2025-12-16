interface ScrapAgentQuery {
    message: string;
    sessionId: string | undefined;
}

export class ScrapAgent {
    userId: string;
    apiKey: string;

    constructor(userId: string, apiKey: string) {
        this.userId = userId;
        this.apiKey = apiKey;
    }

    async query({ message, sessionId }: ScrapAgentQuery): Promise<any> {
        const formData = new FormData();

        if (sessionId) {
            formData.append('session_id', sessionId);
        }

        formData.append('message', message);

        // Build Basic auth from the instance credentials
        const authToken = Buffer
            .from(`${this.userId}:${this.apiKey}`)
            .toString('base64');

        return fetch('https://api.bizagenthub.ai/scrap-agent', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authToken}`
            },
            body: formData
        });
    }
}