INSERT INTO char_data_types
VALUES
('abc', 'abc', 'abc'),
('defghi', 'defghi', 'defghi');

COPY char_data_types TO 'C:\Users\MATHABATHA\Desktop\typetest.txt'
WITH (FORMAT CSV, HEADER, DELIMITER '|');