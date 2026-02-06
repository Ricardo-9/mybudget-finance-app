import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href={"/onboarding/dashboard"}>Dashboard</Link>
      <Link href={"/onboarding/expenses"}>Expenses</Link>
      <Link href={"/onboarding/savings"}>Savings</Link>
      <Link href={"/onboarding/categories"}>Categories</Link>
      <Link href={"/onboarding/new-expense"}>new-expense</Link>
    </nav>
  );
}
