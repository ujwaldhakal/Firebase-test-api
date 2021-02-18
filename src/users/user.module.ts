import { Module } from '@nestjs/common';
import {UserController} from "./http/controllers/user.controller";
import {UserService} from "./services/user.service";
import {CoreModule} from "../core/core.module";
import {AccountService} from "./services/account.service";

@Module({
    imports:[CoreModule],
    controllers: [UserController],
    providers: [UserService,AccountService],
})
export class UserModule {}
