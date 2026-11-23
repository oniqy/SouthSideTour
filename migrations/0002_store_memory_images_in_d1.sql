CREATE TABLE IF NOT EXISTS destination_memory_images (
  id TEXT PRIMARY KEY NOT NULL,
  destination_id TEXT NOT NULL,
  photo_index INTEGER NOT NULL CHECK (photo_index BETWEEN 0 AND 2),
  image_data TEXT NOT NULL CHECK (length(image_data) <= 1650000),
  file_name TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type = 'image/jpeg'),
  UNIQUE (destination_id, photo_index)
);
