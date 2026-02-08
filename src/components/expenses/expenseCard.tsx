"use client";

import { Expense } from "@/src/types/expenses";
import ButtonDefault from "../ui/Button";
import { useRouter } from "next/navigation";
type ExpenseCardProps = Expense & {
  onDelete: (id: string) => void;
};

const ExpenseCard = (props: ExpenseCardProps) => {
  const router = useRouter();
  return (
    <div
      key={props.id}
      className="border border-gray-300 rounded-lg p-4 mb-4 mr-4 mt-4"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          {props.description}
        </h2>

        <div className="space-y-2 mb-4">
          <p className="flex items-center">
            <strong className="text-gray-700 mr-2">Amount:</strong>
            <span className="text-green-600 font-medium">
              R$ {props.amount}
            </span>
          </p>
          <p className="flex items-center">
            <strong className=" mr-2">Category ID:</strong>
            <span>{props.categoryId}</span>
          </p>
          <p className="flex items-center">
            <strong className="mr-2">Date of Expense:</strong>
            <span>{props.date}</span>
          </p>
        </div>

        <ButtonDefault
          type="button"
          onClick={() => props.onDelete(props.id)}
          className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 "
        >
          Delete
        </ButtonDefault>
        <ButtonDefault
          type="button"
          onClick={() =>
            router.push(`/onboarding/edit-expense/${props.id}`)
          }
        >
          Edit
        </ButtonDefault>
      </div>
    </div>
  );
};

export default ExpenseCard;
