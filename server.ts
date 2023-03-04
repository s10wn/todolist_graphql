
import { DataSource } from 'typeorm';


export const connector = new DataSource({
    type: "postgres",
    database: "todolist",
    entities: [],
    logging: true,
    synchronize: true,
    username: 'postgres',
    password: 'root',
    port: 5432
})

connector.initialize();