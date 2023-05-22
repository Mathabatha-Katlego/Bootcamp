CREATE TABLE my_contacts (
  contact_id SERIAL PRIMARY KEY,
  last_name VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  gender CHAR(20) NOT NULL,
  birthday CHAR(50) NOT NULL,
  profession_id BIGINT REFERENCES professions(profession_id)  ,
  zip_code_id BIGINT REFERENCES zip_codes(zip_code_id) ,
  status_id BIGINT REFERENCES status(status_id) ,
  interest1_id BIGINT REFERENCES interest1(interest1_id) ,
  interest2_id BIGINT REFERENCES interest2(interest2_id) ,
  seeking_id BIGINT REFERENCES seeking(seeking_id)
);
drop table my_contacts
SELECT * FROM my_contacts
INSERT INTO my_contacts ("contact_id","last_name","first_name","phone","email","gender","birthday","profession_id","zip_code_id","status_id","interest1_id","interest2_id","seeking_id")
VALUES 
(1,'Mohlaloga','Tiro',794787492,'tiro@gmail.com','M','01/06/1994',1,1,1,1,1,1),
(2,'Mohlaloga','Khutso',727330136,'khutso@gmail.com','M','01/07/1983',2,2,1,1,2,2),
(3,'Mohlaloga','Katlego',794787492,'katlego@gmail.com','M','01/06/1994',1,1,1,1,1,1),
(4,'Mohlaloga','Karabo',727330136,'karabo@gmail.com','M','01/07/1983',2,1,1,1,2,2),
(5,'Mamabolo','Christina',727550555,'christina@gmail.com','F','20/09/1989',3,3,2,2,1,1),
(6,'Nkoana','Tebogo',825047132,'Tebza@gmail.com','F','01/02/1995',4,4,1,1,3,1),
(7,'Smith','John',791234567,'smith@gmail.com','M','10/10/1987',5,5,2,3,1,2),
(8,'Mothiba','William',799921695,'William@gmail.com','M','01/06/1978',6,6,1,4,5,1),
(9,'Mohlala','Karabo',787440136,'karabo@1gmail.com','F','10/02/1992',7,7,1,1,4,1),
(10,'Mogashoa','Lebo',721597865,'Lebo@gmail.com','F','02/10/1988',1,2,1,5,7,1),
(11,'Mashile','Katlego',794787492,'katlego11@gmail.com','M','01/06/1994',1,1,1,1,1,1),
(12,'Govender','Rajesh',156523987,'Rajesh@gmail.com','M','10/10/1997',8,2,1,6,1,1),
(13,'Naidoo','Mary',781253652,'Mary@gmail.com','M','01/01/1992',9,8,1,1,6,1),
(14,'DuPlesis','Marikie',726269992,'marikie@gmail.com','F','01/08/2000',10,9,1,1,1,1),
(15,'Letsoalo','Jimmy',790002500,'Jimmy@gmail.com','M','11/06/1994',11,9,1,1,5,1)

SELECT * FROM my_contacts;

drop table my_contacts

CREATE TABLE zip_codes (
  zip_code_id SERIAL CONSTRAINT zip_code_id_key PRIMARY KEY,
  zip_code VARCHAR(10),
  city VARCHAR(50),
  province VARCHAR(50)
);
drop table zip_codes

INSERT INTO zip_codes (zip_code, city, province) 
VALUES 
('2000', 'Johannesburg', 'Gauteng'),
('0727', 'Polokwane', 'Limpopo'),
('2031', 'Nelspruit', 'Mpumalanga'),
('4050', 'Bloemfontein', 'FreeState'),
('5050', 'Cape Town', 'Western Cape'),
('2013', 'Alice', 'Easten Cape'),
('2587', 'Kimberly', 'Northern Cape'),
('2031', 'Durban', 'KZN'),
('1234', 'Rusternburg', 'North West');

SELECT my_contacts.first_name, my_contacts.last_name, zip_codes.zip_code
FROM my_contacts
JOIN zip_codes ON my_contacts.zip_code_id = zip_codes.zip_code_id;


CREATE TABLE professions (
    profession_id SERIAL CONSTRAINT profession_id_key PRIMARY KEY,
    profession VARCHAR(50) NOT NULL
);
drop table professions
INSERT INTO professions (profession)
VALUES 
('IT'),
('Finance'),
('Supply Chain'),
('Agriculture'),
('HR'),
('Sales'),
('Construction'),
('Marketing'),
('Teacher'),
('Engineer'),
('Driver'),
('Chemist'),
('Pharmacist');

SELECT my_contacts.first_name,my_contacts.last_name,professions.profession
FROM my_contacts
JOIN professions ON my_contacts.profession_id = professions.profession_id;


select* from professions
sele


CREATE TABLE status (
  status_id SERIAL CONSTRAINT status_id_key PRIMARY KEY,
  status VARCHAR(10) 
);

drop table status

INSERT INTO status (status)
VALUES
  ('Single'),
  ('Married');

SELECT my_contacts.first_name,my_contacts.last_name, status.status
FROM my_contacts
JOIN status ON status.status_id = my_contacts.status_id

CREATE TABLE interest1(
  interest1_id SERIAL CONSTRAINT interest_id_key PRIMARY KEY,
  interest VARCHAR(50) 
);
INSERT INTO interest1 (interest)
VALUES
  ('Soccer'),
  ('hiking'),
  ('swimming'),
  ('driving'),
  ('chess'),
  ('Sky diving');
  
  SELECT my_contacts.first_name,my_contacts.last_name,interest1.interest
  FROM my_contacts
  JOIN interest1 ON interest1.interest1_id = my_contacts.interest1_id
  
  drop table interest1
  select * from interest1
  
  CREATE TABLE interest2( 
  interest2_id SERIAL CONSTRAINT interest2_id_key PRIMARY KEY,
  interest VARCHAR(50) 
);

INSERT INTO interest2(interest)
VALUES
('music'),
('reading'),
('rugby'),
('netball'),
('gym'),
('gaming'),
('basketball');

SELECT my_contacts.first_name,my_contacts.last_name,interest2.interest
FROM my_contacts
JOIN interest2 ON interest2.interest2_id = my_contacts.interest2_id

select * from interest2

CREATE TABLE seeking(
seeking_id Serial CONSTRAINT seeking_id_key PRIMARY KEY,
seeking VARCHAR(5)
);

INSERT INTO seeking(seeking)
VALUES
('yes'),
('No');

SELECT my_contacts.first_name, my_contacts.last_name, seeking.seeking
FROM my_contacts
JOIN seeking ON seeking.seeking_id = my_contacts.seeking_id



