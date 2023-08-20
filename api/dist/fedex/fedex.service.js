"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var FedexService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FedexService = void 0;
const common_1 = require("@nestjs/common");
const faker_1 = require("@faker-js/faker");
let FedexService = FedexService_1 = class FedexService {
    constructor() {
        this.logger = new common_1.Logger(FedexService_1.name);
    }
    async getFedexTrackingDetails(trackingNumber) {
        this.logger.log('Attempting to fetch FedEx tracking details (mocked).');
        try {
            const response = this.generateMockedResponse(trackingNumber);
            this.logger.log('Successfully retrieved FedEx tracking details (mocked).');
            return response;
        }
        catch (error) {
            this.logger.error('Failed to fetch FedEx tracking details.', error.toString());
            console.error(error);
        }
    }
    generateMockedResponse(trackingNumber) {
        const status = faker_1.faker.lorem.word();
        const description = faker_1.faker.lorem.sentence();
        return {
            trackingNumber,
            latestStatusDetail: {
                statusByLocale: status,
                description: description,
            },
        };
    }
};
FedexService = FedexService_1 = __decorate([
    (0, common_1.Injectable)()
], FedexService);
exports.FedexService = FedexService;
//# sourceMappingURL=fedex.service.js.map