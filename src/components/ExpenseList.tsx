import { useMemo } from "react";
import { useBudget } from "../hooks/use-budget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
  const { state } = useBudget();

  const filterExpense = state.currentCategory
    ? state.expenses.filter(
        (expenses) => expenses.category === state.currentCategory
      )
    : state.expenses;

  const isEmty = useMemo(() => filterExpense.length === 0, [filterExpense]);

  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
      {isEmty ? (
        <p className="text-gray-600 text-2xl font-bold">No Hay Gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">
            Listado de Gastos
          </p>
          {filterExpense.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
