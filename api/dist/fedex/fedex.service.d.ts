export declare type FedexTrackingResponse = {
    trackingNumber: string;
    latestStatusDetail: {
        statusByLocale: string;
        description: string;
    };
};
export declare class FedexService {
    private readonly logger;
    getFedexTrackingDetails(trackingNumber: string): Promise<FedexTrackingResponse>;
    generateMockedResponse(trackingNumber: string): FedexTrackingResponse;
}
