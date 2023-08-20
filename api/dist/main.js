"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:3000',
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Bibot Kits API')
        .setDescription(`Alma's edition of the Biobot Kits API...`)
        .setContact('Alma Knudson', 'https://github.com/AlmaKnudson', 'knudson.dell@gmail.com')
        .setVersion('0.1')
        .addTag('API')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map