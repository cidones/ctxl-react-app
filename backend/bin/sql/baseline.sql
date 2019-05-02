CREATE TABLE baseline(
    id             INTEGER PRIMARY KEY,
    baseline_date  TIMESTAMP NOT NULL,
    first_name     VARCHAR(64),
    last_name      VARCHAR(64),
    date_of_birth  TIMESTAMP NOT NULL,
    gender         VARCHAR(64),
    race           VARCHAR(64),
    p_height       VARCHAR(64),
    p_weight       VARCHAR(64),
    hair_color     VARCHAR(64),
    dominant_hand  VARCHAR(64),
    smoker         VARCHAR(64),
    pregnant       VARCHAR(64),
    drug_user      VARCHAR(64)
);