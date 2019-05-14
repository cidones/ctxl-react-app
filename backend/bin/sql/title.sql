CREATE TABLE title(
    id_title       SERIAL PRIMARY KEY,
    title          VARCHAR(64),
    user_id        INTEGER REFERENCES account (id)
);