import { openDB } from 'idb'

export const dbPromise = openDB('progress-tracker', 1, {
  upgrade(db) {
    db.createObjectStore('todos', { keyPath: 'id' })
    db.createObjectStore('movies', { keyPath: 'id' })
    db.createObjectStore('expenses', { keyPath: 'id' })
    db.createObjectStore('events', { keyPath: 'id' })
  },
})
