import Link from "next/link";

export default function NavBar(){
    return(
        <nav>
            <Link href={"/pages/onboarding/dashboard"}>Dashboard</Link>
            <Link href={"/pages/onboarding/expenses"}>Expenses</Link>
            <Link href={"/pages/onboarding/savings"}>Savings</Link>
        </nav>
    )
}