drop table if exists loan_info;
    CREATE TABLE loan_info (
    id integer primary key autoincrement,
    member_id text null,
    loan_amount text not null,
    funded_amount text not null,
    term text not null
);