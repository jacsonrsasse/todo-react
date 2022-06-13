import { IDBPDatabase, openDB } from 'idb';
import ITask from './ITask';

class IndexedDBTasksHandler {
  private dbName: string;
  private dbVersion: number;
  private tbName: string;
  private db: any;

  constructor() {
    this.dbName = 'todoDB';
    this.dbVersion = 1;
    this.tbName = 'tbtasks';
  }

  public async openDB() {
    try {
      const tbName = this.tbName;
      this.db = await openDB(this.dbName, this.dbVersion, {
        upgrade(db: IDBPDatabase) {
          db.createObjectStore(tbName, { keyPath: 'key' });
        },
      });
    } catch (error) {
      return false;
    }
  }

  public async getAllTasks() {
    const tx = this.db.transaction(this.tbName, 'readonly');
    const store = tx.objectStore(this.tbName);
    const result = await store.getAll();
    return result;
  }

  public async getTask(id: number) {
    const tx = this.db.transaction(this.tbName, 'readonly');
    const store = tx.objectStore(this.tbName);
    const result = await store.get(id);
    return result;
  }

  public async addTask(task: ITask) {
    const tx = this.db.transaction(this.tbName, 'readwrite');
    const store = tx.objectStore(this.tbName);
    const result = await store.add(task);
    return result;
  }

  public async updateTask(task: ITask) {
    const tx = this.db.transaction(this.tbName, 'readwrite');
    const store = tx.objectStore(this.tbName);
    const result = await store.put(task);
    return result;
  }

  public async deleteTask(id: number) {
    const tx = this.db.transaction(this.tbName, 'readwrite');
    const store = tx.objectStore(this.tbName);
    await store.delete(id);
    return id;
  }
}

export default IndexedDBTasksHandler;
