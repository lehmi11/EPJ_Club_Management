import {createConnection, createConnections} from "typeorm";

export class ConnectionCreater {
    public async createProductiveConnection() {
        const connection = await createConnection({
            name: "test",
            type: "postgres",
            host: "sinv-56037.edu.hsr.ch",
            port: 40000,
            username: "postgres",
            password: "clubmanager",
            database: "clubManager",
            schema: "public",
            synchronize: false,
            logging: false,
            entities: [
                "dist/entities/*.js"],
        });
        return connection;
    }
    public async createTestConnection() {
       const connection = await createConnection({
            name: "test",
            type: "postgres",
            host: "sinv-56037.edu.hsr.ch",
            port: 40000,
            username: "postgres",
            password: "clubmanager",
            database: "clubManagerTest",
            schema: "public",
            dropSchema: true,
            synchronize: false,
            logging: false,
            entities: [
            "dist/entities/*.js"],
       });
       return connection;
    }
}
