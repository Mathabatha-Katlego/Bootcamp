CREATE DATABASE employees1_database;

CREATE TABLE employeees (emp_id serial PRIMARY KEY,
						first_name VARCHAR(50),
						surname VARCHAR(50),
						gender VARCHAR(15),
						address VARCHAR(50),
						email VARCHAR(50)
						
);

drop table employeees

Insert into employeees (first_name, Surname, gender, address,email)Values('Katlego','Mohlaloga','M','12 Goven, johannesburg','Katlego@gmail.com');
Insert into employeees (first_name, Surname, gender, address,email)Values('Khutso','Mohlaloga','M','11 Thabo str, Pretoria','Khutso@gmail.com');
Insert into employeees (first_name, Surname, gender, address,email)Values('Christina','Ramphele','F','11 Main Str, Centurion','Katlego@gmail.com');
Insert into employeees (first_name, Surname, gender, address,email)Values('Tebogo','Nkoana','F','1 Chis Avenue, Polokwane','Tnkoana@gmail.com');
Insert into employeees (first_name, Surname, gender, address,email)Values('Rocky','Makola','M','909 Steve road, johannesburg','Rocky@gmail.com');
Insert into employeees (first_name, Surname, gender, address,email)Values('Katlego','Nkuna','F','121 Goven Avenue, Capetown','Nkuna@gmail.com');


CREATE TABLE Department (Dep_id serial,
						 Depart_name VARCHAR(50),
						 Depart_city VARCHAR(25),
						 PRIMARY KEY(Dep_id)
);


Insert into department(Depart_name, Depart_city)Values('Finance','Cape Town');
Insert into department(Depart_name, Depart_city)Values('HR','Johannesburg');
Insert into department(Depart_name, Depart_city)Values('logistics','Polokwane');
Insert into department(Depart_name, Depart_city)Values('Procurement','Durban');
Insert into department(Depart_name, Depart_city)Values('Marketing','Pretoria');
Insert into department(Depart_name, Depart_city)Values('Sales','Kempton Park');

CREATE TABLE Job(Job_id serial,
				 Job_title VARCHAR(25),
				 PRIMARY KEY(Job_id)
);


Insert into Job(Job_title)Values('Accountant');
Insert into Job(Job_title)Values('HR Manager');
Insert into Job(Job_title)Values('Demand planner');
Insert into Job(Job_title)Values('Procurement officer');
Insert into Job(Job_title)Values('Marketing assistant');
Insert into Job(Job_title)Values('Junior Salesperon');

CREATE TABLE Salaries(Salary_id serial PRIMARY KEY,
					  salary_pa serial,
					 
);
drop table salaries

Insert into Salaries(salary_pa)Values(10000);
Insert into Salaries(salary_pa)Values(20000);
Insert into Salaries(salary_pa)Values(30000);
Insert into Salaries(salary_pa)Values(40000);
Insert into Salaries(salary_pa)Values(50000);
Insert into Salaries(salary_pa)Values(60000);

CREATE TABLE Overtime_Hour(Overtime_id serial PRIMARY KEY,
						   Overtime_hours SMALLINT,
						   PRIMARY KEY(overtime_id)
);
drop TABLE overtime_hour
Insert into Overtime_hour(Overtime_hours)Values(6);
Insert into Overtime_hour(Overtime_hours)Values(12);
Insert into Overtime_hour(Overtime_hours)Values(15);
Insert into Overtime_hour(Overtime_hours)Values(8);
Insert into Overtime_hour(Overtime_hours)Values(3);
Insert into Overtime_hour(Overtime_hours)Values(20);

SELECT *
FROM employeees
LEFT JOIN Department ON employeees.emp_id = Department.Dep_id
LEFT JOIN Job ON employeees.emp_id = Job.Job_id
LEFT JOIN Salaries ON employeees.emp_id = Salaries.Salary_id
LEFT JOIN Overtime_Hour ON employeees.emp_id = Overtime_Hour.Overtime_id;







