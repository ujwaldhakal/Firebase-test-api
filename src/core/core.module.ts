import { Module } from '@nestjs/common';
import {DatabaseService} from "./database";
import {CorsOptionsProvider} from "./providers/cors-options-provider";

@Module({
    providers: [DatabaseService,CorsOptionsProvider],
    exports: [DatabaseService]
})
export class CoreModule {}
