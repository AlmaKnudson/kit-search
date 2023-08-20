"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var KitsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KitsService = void 0;
const common_1 = require("@nestjs/common");
const fedex_service_1 = require("../fedex/fedex.service");
const mocks_1 = require("./mocks");
let KitsService = KitsService_1 = class KitsService {
    constructor(fedexService) {
        this.fedexService = fedexService;
        this.logger = new common_1.Logger(KitsService_1.name);
    }
    async lookupKitFedexStatusByTrackingNumber(trackingNumber) {
        const trackingDetails = await this.fedexService.getFedexTrackingDetails(trackingNumber);
        return {
            trackingNumber: trackingDetails.trackingNumber,
            statusDetails: {
                status: trackingDetails.latestStatusDetail.statusByLocale,
                description: trackingDetails.latestStatusDetail.description,
            },
        };
    }
    async loadBiobotKits() {
        return mocks_1.BIOBOT_KITS.map((kit) => kit.id);
    }
    async loadBiobotKitById(id) {
        this.logger.debug(`Loading Biobot kit ${id}.`);
        const kit = mocks_1.BIOBOT_KITS.find((kit) => kit.id === id);
        if (!kit) {
            throw new common_1.BadRequestException(`Kit ${id} not found.`);
        }
        this.logger.debug(`Loaded Biobot kit ${id}.`);
        return kit;
    }
};
KitsService = KitsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [fedex_service_1.FedexService])
], KitsService);
exports.KitsService = KitsService;
//# sourceMappingURL=kits.service.js.map