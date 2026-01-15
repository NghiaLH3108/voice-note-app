CREATE TABLE users
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    full_name  VARCHAR(100),
    email      VARCHAR(100) UNIQUE,
    password   VARCHAR(255),
    avatar     VARCHAR(255),
    theme      ENUM ('light', 'dark', 'system') DEFAULT 'system',
    created_at TIMESTAMP                        DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP                        DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE notes
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    user_id    INT,
    title      VARCHAR(255),
    content    TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE note_images
(
    id        INT AUTO_INCREMENT PRIMARY KEY,
    note_id   INT,
    image_url VARCHAR(255),
    FOREIGN KEY (note_id) REFERENCES notes (id) ON DELETE CASCADE
);

CREATE TABLE note_audios
(
    id        INT AUTO_INCREMENT PRIMARY KEY,
    note_id   INT,
    audio_url VARCHAR(255),
    duration  INT,
    FOREIGN KEY (note_id) REFERENCES notes (id) ON DELETE CASCADE
);