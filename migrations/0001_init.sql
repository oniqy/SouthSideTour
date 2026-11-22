CREATE TABLE IF NOT EXISTS trip_state (
  id TEXT PRIMARY KEY NOT NULL CHECK (id = 'main'),
  visited_place_ids TEXT NOT NULL DEFAULT '[]',
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS expenses (
  id TEXT PRIMARY KEY NOT NULL,
  amount INTEGER NOT NULL CHECK (amount > 0),
  category TEXT NOT NULL CHECK (category IN ('food', 'vehicle', 'fine', 'other')),
  timestamp TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS destination_memories (
  destination_id TEXT NOT NULL,
  photo_index INTEGER NOT NULL CHECK (photo_index BETWEEN 0 AND 2),
  object_key TEXT NOT NULL UNIQUE,
  file_name TEXT NOT NULL,
  content_type TEXT NOT NULL,
  PRIMARY KEY (destination_id, photo_index)
);

CREATE TABLE IF NOT EXISTS app_meta (
  key TEXT PRIMARY KEY NOT NULL,
  value TEXT NOT NULL
);

INSERT OR IGNORE INTO trip_state (id, visited_place_ids) VALUES ('main', '[]');
INSERT OR IGNORE INTO app_meta (key, value) VALUES ('local_data_imported', '0');
