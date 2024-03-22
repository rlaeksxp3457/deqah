import { createClient, RedisClientType } from 'redis';

const redisClient: RedisClientType = createClient({ url: 'redis://deqah_redis:6379' });

/**
 * Redis 서버에 연결합니다.
 * @returns {Promise<void>}
 */
export const initRedis = async (): Promise<void> => {
  await redisClient.connect();
  if (process.env.NODE_ENV !== 'test') {
    console.log('Redis Connected');
  }
};

export const getRedis = (): RedisClientType => redisClient;
