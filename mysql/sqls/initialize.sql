DROP DATABASE IF EXISTS IDE_DB;

CREATE DATABASE IDE_DB;
USE IDE_DB;

-- IDENTIFIED BY의 뒤는 비밀번호
CREATE USER 'chiyomomo'@'%' IDENTIFIED BY 'shamimomo56562';
GRANT ALL PRIVILEGES ON IDE_DB.* to 'chiyomomo'@'%';
-- 권한 적용
FLUSH PRIVILEGES