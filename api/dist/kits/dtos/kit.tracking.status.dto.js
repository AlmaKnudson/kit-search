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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KitTrackingStatusDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class StatusDetails {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The current status of the kit.',
        example: 'Picked up',
    }),
    __metadata("design:type", String)
], StatusDetails.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'A detailed description of the current status.',
        example: 'Picked up and in transit',
    }),
    __metadata("design:type", String)
], StatusDetails.prototype, "description", void 0);
class KitTrackingStatusDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The tracking number for the kit.',
        example: '794971357442',
    }),
    __metadata("design:type", String)
], KitTrackingStatusDto.prototype, "trackingNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Details about the status of the kit.',
        type: StatusDetails,
    }),
    __metadata("design:type", StatusDetails)
], KitTrackingStatusDto.prototype, "statusDetails", void 0);
exports.KitTrackingStatusDto = KitTrackingStatusDto;
//# sourceMappingURL=kit.tracking.status.dto.js.map