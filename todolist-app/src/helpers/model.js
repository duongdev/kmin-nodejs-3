const path = require("path");
const fs = require("fs");

const DB_DIR = path.resolve(__dirname, "../../db");

class Model {
    dbName;
    dbFile;

    constructor(_dbName) {
        this.dbName = _dbName;
        this.dbFile = path.resolve(DB_DIR, _dbName) + ".json";
    }

    ensureDbFile() {
        if (!fs.existsSync(DB_DIR)) {
            fs.mkdirSync(DB_DIR);
        }

        if (!fs.existsSync(this.dbFile)) {
            fs.writeFileSync(this.dbFile, "");
        }
    }

    /** Creates a new entity */
    create() {}

    /** Find all entities */
    find() {}
}

function createModel(modelName) {
    const dbFile = path.resolve(DB_DIR, modelName) + ".json";

    function ensureDbFile() {
        if (!fs.existsSync(DB_DIR)) {
            fs.mkdirSync(DB_DIR);
        }

        if (!fs.existsSync(dbFile)) {
            fs.writeFileSync(dbFile, "");
        }
    }

    function saveAllEntities(entities) {
        // ensure DB_DIR existence
        if (!fs.existsSync(DB_DIR)) {
            fs.mkdirSync(DB_DIR, { recursive: true });
        }

        fs.writeFileSync(dbFile, JSON.stringify(entities));

        return entities;
    }

    function create(entityInput) {
        const entity = {
            ...entityInput,
            id: Date.now().toString(),
            createdAt: new Date(),
        };

        const existingEntities = findAll();
        const appendedEntities = [...existingEntities, entity];

        saveAllEntities(appendedEntities);

        return entity;
    }

    function findAll() {
        try {
            const entities = JSON.parse(fs.readFileSync(dbFile));
            return entities;
        } catch (error) {
            return [];
        }
    }

    function findById(id) {
        const entities = findAll();
        const foundEntity = entities.find((entity) => entity.id === id);

        return foundEntity || null;
    }

    return { ensureDbFile, findAll, create, findById };
}

module.exports = { createModel };