import { RedisClientType } from 'redis';

export default class VerifyService {
  private redisClient: RedisClientType;
  constructor(redis: RedisClientType) {
    this.redisClient = redis;
  }
  setData = async (key: string, value: string, expire: number): Promise<string | null> => {
    return await this.redisClient.set(key, value, { EX: expire });
  };
  getData = async (key: string): Promise<string | null> => {
    return await this.redisClient.get(key);
  };
  deleteData = async (key: string): Promise<number | null> => {
    return await this.redisClient.del(key);
  };
}
