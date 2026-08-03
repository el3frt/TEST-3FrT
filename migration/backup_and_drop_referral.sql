-- Backup referral_code table and drop it

SET @BACKUP_TABLE = 'referral_code_backup_"$(date +%Y%m%d_%H%M%S)"';

-- The following is a template. Run on server shell to create backup and drop table.
-- Example:
-- mysqldump -u user -p database referral_code > referral_code_backup.sql
-- then run: mysql -u user -p database < referral_code_backup.sql

-- SQL to drop table (run after backup):
DROP TABLE IF EXISTS referral_code;
