import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../core/database';

@Injectable()
export class AccountService {
    constructor(private readonly databaseService: DatabaseService) {}

    async getAccounts(): Promise<any> {
        return this.databaseService.getList('accounts');
    }

    async rateApp(appName:string,num: number): Promise<void> {
        const accounts = await this.getAccounts();
        Object.keys(accounts).map((id) =>   {
            const app = accounts[id].apps;
            if(app.hasOwnProperty(appName)) {
                const appWithRatings = {
                    apps : {
                        [appName] : {
                            title : app[appName].title,
                            rating: num
                        }
                    }
                }
                this.databaseService.update('accounts',id,appWithRatings);
            }
        })
    }
}
