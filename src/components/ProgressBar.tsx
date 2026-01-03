type Props = {
  currentDay: number
  totalDays: number
}

export default function ProgressBar({ currentDay, totalDays }: Props) {
  const percent = (currentDay / totalDays) * 100

  return (
    <div>
      <div className="w-full bg-neutral-700 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-400"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-center text-sm text-neutral-400 mt-1">
        {percent.toFixed(2)}%
      </p>
    </div>
  )
}
