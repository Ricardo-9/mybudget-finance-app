--TABLES OF DATABASE | TABELAS DO BANCO DE DADOS

--Users Table
--Stores the auth / login data(Will be implemented)

--Tabela de Usuários
--Armazena os dados de autenticação/login(implementação futura)

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

--Expenses Table
--Store all information about the user expenses (variable)

--Tabela de Despesas
--Armazena todas as informações sobre as despesas do usuário (variável)

CREATE TABLE expenses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(50) NOT NULL,
    notes VARCHAR(150),
    amount DECIMAL(10,2) NOT NULL,
    date_of_purchase DATE NOT NULL,
    user_id UUID NOT NULL,
    category_id UUID NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);

--Fixed expenses Table
--Store all information about the user fixed expenses (fixed)

--Tabela de despesas fixas
--Armazena todas as informações sobre as despesas fixas do usuário (fixas)

CREATE TABLE fixed_expenses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(50) NOT NULL,
    notes VARCHAR(150),
    amount DECIMAL(10,2) NOT NULL,
    payment_day INTEGER NOT NULL,
    start_payment_date DATE NOT NULL,
    user_id UUID NOT NULL,
    category_id UUID NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);


