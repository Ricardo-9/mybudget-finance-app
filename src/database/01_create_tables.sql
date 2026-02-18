--TABLES OF DATABASE 

--Activing extension to use gen_uuid
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

--USERS TABLE

CREATE TABLE
    users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW (),
        updated_at TIMESTAMP DEFAULT NOW ()
    );



--EXPENSES TABLE

CREATE TABLE
    expenses (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        title VARCHAR(50) NOT NULL,
        notes VARCHAR(150),
        amount DECIMAL(10, 2) NOT NULL,
        date_of_purchase DATE NOT NULL,
        user_id UUID NOT NULL,
        category_id UUID,
        created_at TIMESTAMP NOT NULL DEFAULT NOW (),
        updated_at TIMESTAMP,
        deleted_at TIMESTAMP
    );



--FiXED EXPENSES

CREATE TABLE
    fixed_expenses (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        title VARCHAR(50) NOT NULL,
        notes VARCHAR(150),
        amount DECIMAL(10, 2) NOT NULL,
        payment_day INTEGER NOT NULL,
        start_payment_date DATE NOT NULL,
        user_id UUID NOT NULL,
        category_id UUID,
        created_at TIMESTAMP NOT NULL DEFAULT NOW (),
        updated_at TIMESTAMP,
        deleted_at TIMESTAMP
    );



--FINANCIAL GOALS TABLE

CREATE TABLE
    financial_goals (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        goal_name VARCHAR(50) NOT NULL,
        motivation VARCHAR (150),
        target_amount DECIMAL(10, 2) NOT NULL,
        category_id UUID ,
        user_id UUID NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW (),
        updated_at TIMESTAMP,
        deleted_at TIMESTAMP
    );



--DEPOSITS TABLE

CREATE TABLE
    deposits (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        deposit_amount DECIMAL(10, 2) NOT NULL,
        deposit_date DATE NOT NULL,
        goal_id UUID,
        created_at TIMESTAMP NOT NULL DEFAULT NOW (),
        updated_at TIMESTAMP,
        deleted_at TIMESTAMP
    );



--CaATEGORIES TABLE

CREATE TABLE
    categories (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid (),
        category_name VARCHAR(50) NOT NULL,
        category_icon VARCHAR(50),
        category_color VARCHAR(20),
        user_id UUID NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW (),
        updated_at TIMESTAMP,
        deleted_at TIMESTAMP
    );
