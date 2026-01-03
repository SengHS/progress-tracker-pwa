type Props = {
  currentDay: number
}

export default function YearGrid({ currentDay }: Props) {
  const days = Array.from({ length: 365 }, (_, i) => i + 1)

  return (
    <div className="grid grid-cols-14 gap-2">
      {days.map((day) => {
        let color = 'bg-neutral-300'

        if (day <= currentDay) color = 'bg-emerald-400'
        // if (day === currentDay) color = 'bg-sky-400'

        return (
          <div
            key={day}
            className={`w-4 h-4 rounded-full ${color}`}
          />
        )
      })}
    </div>
  )
}
