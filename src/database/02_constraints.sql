--CONSTRAINTS

--PROFILE ---> USERS 
ALTER TABLE user_profile
ADD CONSTRAINT fk_user_profile_user 
FOREIGN KEY (user_id) 
REFERENCES users(id) 
ON DELETE CASCADE;

-- EXPENSES ---> USERS
ALTER TABLE expenses 
ADD CONSTRAINT fk_expenses_user 
FOREIGN KEY (user_id) 
REFERENCES users(id) 
ON DELETE CASCADE;

-- FIXED EXPENSES ---> USERS
ALTER TABLE fixed_expenses 
ADD CONSTRAINT fk_fixed_expenses_user 
FOREIGN KEY (user_id) 
REFERENCES users(id) 
ON DELETE CASCADE;

-- FINANCIAL GOALS ---> USERS
ALTER TABLE financial_goals 
ADD CONSTRAINT fk_financial_goals_user 
FOREIGN KEY (user_id) 
REFERENCES users(id) 
ON DELETE CASCADE;

-- CATEGORIES ---> USERS
ALTER TABLE categories
ADD CONSTRAINT fk_categories_user 
FOREIGN KEY (user_id) 
REFERENCES users(id) 
ON DELETE CASCADE;

-- EXPENSES ---> CATEGORIES
ALTER TABLE expenses
ADD CONSTRAINT fk_expenses_category
FOREIGN KEY (category_id)
REFERENCES categories(id)
ON DELETE SET NULL;

-- FIXED EXPENSES ---> CATEGORIES
ALTER TABLE fixed_expenses
ADD CONSTRAINT fk_fixed_expenses_category
FOREIGN KEY (category_id)
REFERENCES categories(id)
ON DELETE SET NULL;

-- FINANCIAL GOALS ---> CATEGORIES
ALTER TABLE financial_goals
ADD CONSTRAINT fk_financial_goals_category
FOREIGN KEY (category_id)
REFERENCES categories(id)
ON DELETE SET NULL;

-- DEPOSITS ---> FINANCIAL GOALS
ALTER TABLE deposits
ADD CONSTRAINT fk_deposits_goal
FOREIGN KEY (goal_id)
REFERENCES financial_goals(id)
ON DELETE CASCADE;
