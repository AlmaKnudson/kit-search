import { KitTrackingStatusDto } from './dtos/kit.tracking.status.dto';
import { KitsService } from './kits.service';
export declare class KitsController {
    private readonly kitsService;
    private readonly logger;
    constructor(kitsService: KitsService);
    lookupKitFedexStatusByTrackingNumber(kitId: string): Promise<KitTrackingStatusDto>;
    loadBiobotKits(): Promise<number[]>;
}
