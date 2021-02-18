import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../core/database';

interface UserDetail {
id: string,
account: string,
name: string
}

@Injectable()
export class UserService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getUsers(): Promise<UserDetail[]> {
        const data = await this.databaseService.getList('users');

        const finalData = Object.keys(data).map((item) => (
            {
                id : item,
                account: data[item].account,
                name: data[item].name
            }
        ))
        return finalData;
    }
}
