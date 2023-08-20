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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var KitsController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KitsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const kit_tracking_status_dto_1 = require("./dtos/kit.tracking.status.dto");
const kits_service_1 = require("./kits.service");
let KitsController = KitsController_1 = class KitsController {
    constructor(kitsService) {
        this.kitsService = kitsService;
        this.logger = new common_1.Logger(KitsController_1.name);
    }
    async lookupKitFedexStatusByTrackingNumber(kitId) {
        const kitIdNumber = parseInt(kitId, 10);
        if (isNaN(kitIdNumber)) {
            throw new common_1.BadRequestException(`Invalid kitId: ${kitId}`);
        }
        const kit = await this.kitsService.loadBiobotKitById(kitIdNumber);
        return this.kitsService.lookupKitFedexStatusByTrackingNumber(kit.shipping_tracking_code);
    }
    async loadBiobotKits() {
        this.logger.debug(`Loading all Biobot kits.`);
        return this.kitsService.loadBiobotKits();
    }
};
__decorate([
    (0, common_1.Get)(':id/status'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The status of the kit.',
        type: kit_tracking_status_dto_1.KitTrackingStatusDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], KitsController.prototype, "lookupKitFedexStatusByTrackingNumber", null);
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'A list of Biobot kits.',
        type: [Number],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KitsController.prototype, "loadBiobotKits", null);
KitsController = KitsController_1 = __decorate([
    (0, swagger_1.ApiTags)('API'),
    (0, common_1.Controller)('kits'),
    __metadata("design:paramtypes", [kits_service_1.KitsService])
], KitsController);
exports.KitsController = KitsController;
//# sourceMappingURL=kits.controller.js.map