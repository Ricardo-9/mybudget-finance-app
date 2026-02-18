--Function trigger invoked to update the field 'updated_at' for each table.

CREATE OR REPLACE FUNCTION function_update_at()
RETURN TRIGGER AS $$
BEGIN NEW.updated_at = NOW();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

--FOR USERS TABLE

CREATE TRIGGER trg_update_users_updated_at 
AFTER UPDATE ON users
FOR EACH ROW 
EXECUTE FUNCTION function_update_at();

--FOR EXPENSES TABLE

CREATE TRIGGER trg_update_expenses_updated_at 
AFTER UPDATE ON expenses
FOR EACH ROW 
EXECUTE FUNCTION function_update_at();

--FOR FIXED EXPENSES TABLE

CREATE TRIGGER trg_update_fixed_expenses_updated_at 
AFTER UPDATE ON fixed_expenses
FOR EACH ROW 
EXECUTE FUNCTION function_update_at();

--FOR FINANCIAL GOALS TABLE

CREATE TRIGGER trg_update_financial_goals_updated_at 
AFTER UPDATE ON financial_goals
FOR EACH ROW 
EXECUTE FUNCTION function_update_at();

--FOR DEPOSITS TABLE

CREATE TRIGGER trg_update_deposits_updated_at 
AFTER UPDATE ON deposits
FOR EACH ROW 
EXECUTE FUNCTION function_update_at();

--FOR CATEGORIES TABLE

CREATE TRIGGER trg_update_categories_updated_at 
AFTER UPDATE ON categories
FOR EACH ROW 
EXECUTE FUNCTION function_update_at();