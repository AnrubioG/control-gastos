import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBudget } from "../hooks/use-budget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

export default function BudgetTracker() {
  const { state, totalExpenses, remainingBudget, dispatch } = useBudget();
  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor:
              percentage > 85
                ? "#EC3F0C"
                : percentage > 60
                ? "#FD660B"
                : "#3b82f6",
            trailColor: "#f5f5f5",
            textSize: 8,
          })}
          text={`${percentage}% gastado`}
          strokeWidth={15}
        />
      </div>

      <div className=" flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-500 w-full p-2 text-white uppercase font-bold rounded-lg"
          onClick={() => dispatch({ type: "reset-app" })}
        >
          Resetear App
        </button>
        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={remainingBudget} />
        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
}
