import { useMemo } from "react";
import { useBudget } from "../hooks/use-budget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
  const { state } = useBudget();

  const isEmty = useMemo(() => state.expenses.length === 0, [state.expenses]);
  return (
    <div className="mt-10">
      {isEmty ? (
        <p className="text-gray-600 text-2xl font-bold">No Hay Gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">
            Listado de Gastos
          </p>
          {state.expenses.map((expense) => (
            <ExpenseDetail></ExpenseDetail>
          ))}
        </>
      )}
    </div>
  );
}
