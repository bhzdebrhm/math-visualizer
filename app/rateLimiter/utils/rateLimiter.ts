export type Id = number | string;
export type Seconds = number;
export type Milliseconds = number;
export type Microseconds = number;

export interface SlidingRateLimiterOptions {
  interval: number;
  max: number;
}

export interface RateLimitInfo {
  blocked: boolean;
}

export class SlidingRateLimiter {
  interval: Microseconds;
  max: number;

  constructor({ interval, max }: SlidingRateLimiterOptions) {
    this.interval = interval;
    this.max = max;
  }

  async limitWithInfo(id: Id): Promise<RateLimitInfo> {
    const timestamps = await this.getTimestamps(id);
    return this.calculateInfo(timestamps);
  }

  async limit(id: Id): Promise<boolean> {
    return (await this.limitWithInfo(id)).blocked;
  }

  protected async getTimestamps(_id: Id): Promise<Array<Microseconds>> {
    return Promise.reject(new Error("Not implemented"));
  }

  private calculateInfo(timestamps: Array<Microseconds>): RateLimitInfo {
    const numTimestamps = timestamps.length;

    const blockedDueToCount = numTimestamps > this.max;

    const blocked = blockedDueToCount;

    return {
      blocked,
    };
  }
}

export class DictionarySlidingRateLimiter extends SlidingRateLimiter {
  storage: Record<Id, Array<number> | undefined>;

  constructor(options: SlidingRateLimiterOptions) {
    super(options);
    this.storage = {};
  }

  protected async getTimestamps(id: Id) {
    const currentTimestamp = window.performance.now() as Microseconds;
    const clearBefore = currentTimestamp - this.interval;
    console.log("currentTimestamp", currentTimestamp);
    console.log("clearBefore", clearBefore);
    const storedTimestamps = (this.storage[id] || []).filter(
      (t) => t > clearBefore
    );
    console.log("storedTimestamps", storedTimestamps);
    storedTimestamps.push(currentTimestamp);

    this.storage[id] = storedTimestamps;
    return storedTimestamps as Array<Microseconds>;
  }
}
