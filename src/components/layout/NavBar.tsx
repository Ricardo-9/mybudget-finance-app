import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-4 p-4 border-b border-gray-200 bg-gray-50">
      <Link 
        href={"/onboarding/dashboard"} 
        className="text-blue-600 hover:text-blue-800"
      >
        Dashboard
      </Link>
      <Link 
        href={"/onboarding/expenses"} 
        className="text-blue-600 hover:text-blue-800"
      >
        Expenses
      </Link>
      <Link 
        href={"/onboarding/savings"} 
        className="text-blue-600 hover:text-blue-800"
      >
        Savings
      </Link>
      <Link 
        href={"/onboarding/categories"} 
        className="text-blue-600 hover:text-blue-800"
      >
        Categories
      </Link>
      <Link 
        href={"/onboarding/new-expense"} 
        className="text-blue-600 hover:text-blue-800"
      >
        new-expense
      </Link>
    </nav>
  );
}