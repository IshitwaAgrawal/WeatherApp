export default class LRUCache {
  constructor(capacity, autoClearTime = 15 * 60 * 1000) {
    this.capacity = capacity;
    this.cache = [];
    this.autoClearTime = autoClearTime;

    // Schedule automatic cache clearing
    this.scheduleAutoClear();
  }

  get(key) {
    const index = this.cache.findIndex((entry) => entry.key === key);
    if (index !== -1) {
      // If the key exists in the cache, move it to the end (most recently used position)
      const entry = this.cache.splice(index, 1)[0];
      this.cache.push(entry);
      return entry.value;
    } else {
      return null;
    }
  }

  put(key, value) {
    const index = this.cache.findIndex((entry) => entry.key === key);
    if (index !== -1) {
      // If the key already exists, update the value and move it to the end
      this.cache.splice(index, 1);
    } else if (this.cache.length >= this.capacity) {
      // If the cache is full, remove the least recently used entry (first entry in the array)
      this.cache.shift();
    }

    // Add the new entry to the end of the cache
    this.cache.push({ key, value });
  }

  clear() {
    this.cache = [];
    // Reschedule the auto-clear timer
    this.scheduleAutoClear();
  }

  scheduleAutoClear() {
    if (this.autoClearTime > 0) {
      // Schedule cache clearing after the specified time interval
      setTimeout(() => this.clear(), this.autoClearTime);
    }
  }
}