CREATE TABLE baseline(
    participant_id SERIAL PRIMARY KEY,
    baseline_date  VARCHAR(64),
    first_name     VARCHAR(64),
    last_name      VARCHAR(64),
    date_of_birth  VARCHAR(64),
    gender         VARCHAR(64),
    race           VARCHAR(64),
    p_height       VARCHAR(64),
    p_weight       VARCHAR(64),
    hair_color     VARCHAR(64),
    dominant_hand  VARCHAR(64),
    smoker         VARCHAR(64),
    pregnant       VARCHAR(64),
    drug_user      VARCHAR(64),
    user_id        INTEGER REFERENCES account (id)
);