SELECT DISTINCT school, salary from teachers;

SELECT DISTINCT school
FROM teachers;

SELECT last_name, school, hire_date
FROM teachers
WHERE school = 'Myers Middle School';

SELECT last_name, first_name ,salary FROM teachers 
WHERE first_name ILIKE 'sam%';

SELECT *
FROM teachers
WHERE school = 'Myers Middle School'
AND (salary < 38000 OR salary >45000);

SELECT first_name, last_name, school, hire_date, salary
FROM teachers
WHERE school LIKE '%Roos%'
ORDER BY hire_date DESC;

SELECT first_name
FROM teachers
WHERE first_name ILIKE 's%'
AND salary >40000;

SELECT first_name, last_name, school, hire_date, salary
FROM teachers
WHERE hire_date > '2010-01-01'
ORDER BY salary DESC;

SELECT *
FROM teachers
ORDER BY school, last_name
