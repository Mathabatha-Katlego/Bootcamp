SELECT upper('hello')

SELECT initcap('at the end of the day')

SELECT char_length(' Pat ')

SELECT length(' Pat ')
SELECT position('a' in 'Katlego')

SELECT trim('s' from 'socks')
SELECT trim(TRAILING's' from 'socks')

SELECT char_length(trim(' Pat '));

ltrim(('socks', 's'))

SELECT left('703-555-1212', 3)
SELECT right('703-555-1212', 4)

SELECT replace('mout','m','g')

SELECT substring('The game starts at 7 p.m. on May 2, 2019.' from '\d{4}');

CREATE TABLE crime_reports (
crime_id bigserial PRIMARY KEY,
date_1 timestamp with time zone,
date_2 timestamp with time zone,
street varchar(250),
city varchar(100),
crime_type varchar(100),
description text,
case_number varchar(50),
original_text text NOT NULL
);
COPY crime_reports (original_text)
FROM 'C:\Users\MATHABATHA\Desktop\SQL\practical-sql-main\Chapter_13\crime_reports.csv'
WITH (FORMAT CSV, HEADER OFF, QUOTE '"');

SELECT crime_id,
regexp_match(original_text, '\d{1,2}\/\d{1,2}\/\d{2}')
FROM crime_reports;

SELECT crime_id,
regexp_matches(original_text, '\d{1,2}\/\d{1,2}\/\d{2}', 'g')
FROM crime_reports;

SELECT crime_id,
regexp_match(original_text, '/\d{2}\n\d{4}-(\d{4})')
FROM crime_reports;

SELECT crime_id,
regexp_match(original_text, '-(\d{1,2}\/\d{1,2}\/\d{1,2})')
FROM crime_reports;

SELECT crime_id,
regexp_match(original_text, '\/\d{2}\n(\d{4}')
FROM crime_reports;

SELECT crime_id,
regexp_match(original_text, 'hrs.\n(\d+ .+(?:Sq.|Plz.|Dr.|Ter.|Rd.))')
FROM crime_reports;

SELECT crime_id,
regexp_match(original_text, '(?:Sq.|Plz.|Dr.|Ter.|Rd.)\n(\w+ \w+|\w+)\n)'
FROM crime_reports;