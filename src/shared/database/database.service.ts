import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql';

interface CustomSql extends mysql.Connection {
  execute: (query: string, args: any[]) => Promise<any>;
}

@Injectable()
export class DatabaseService {}
