--INDEX

--PROFILE
CREATE INDEX idx_user_profile_user
ON user_profile(user_id);

-- EXPENSES
CREATE INDEX idx_expenses_user
ON expenses(user_id);

CREATE INDEX idx_expenses_category
ON expenses(category_id);

CREATE INDEX idx_expenses_user_date
ON expenses(user_id, date_of_purchase);

-- FIXED EXPENSES
CREATE INDEX idx_fixed_expenses_user
ON fixed_expenses(user_id);

CREATE INDEX idx_fixed_expenses_category
ON fixed_expenses(category_id);

-- FINANCIAL GOALS
CREATE INDEX idx_financial_goals_user
ON financial_goals(user_id);

CREATE INDEX idx_financial_goals_category
ON financial_goals(category_id);

-- DEPOSITS
CREATE INDEX idx_deposits_goal
ON deposits(goal_id);

-- CATEGORIES
CREATE INDEX idx_categories_user
ON categories(user_id);
