import { FedexService } from '../fedex/fedex.service';
import { KitTrackingStatusDto } from './dtos/kit.tracking.status.dto';
import { BiobotKitDto } from './dtos/kit.dto';
export declare class KitsService {
    private readonly fedexService;
    private readonly logger;
    constructor(fedexService: FedexService);
    lookupKitFedexStatusByTrackingNumber(trackingNumber: string): Promise<KitTrackingStatusDto>;
    loadBiobotKits(): Promise<number[]>;
    loadBiobotKitById(id: number): Promise<BiobotKitDto>;
}
