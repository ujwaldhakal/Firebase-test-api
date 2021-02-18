import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "../../services/user.service";
import {AccountService} from "../../services/account.service";
import {get} from 'lodash'

@Controller()
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly accountService: AccountService
    ) {
    }

    @Get('/users')
    async getUsersWithAccounts() {
        const users = await this.userService.getUsers();
        const accounts = await this.accountService.getAccounts();
        const result = users.map((user) => {
            return  {...user,...accounts[user.account]}
        })
        return {data: result};
    }


    @Post('/rate/app/')
    async rateApp(
        @Body()  req
    ) {
        console.log(req);
        return  await this.accountService.rateApp(req.name,req.rating);
    }

}
