import YearGrid from '@/components/YearGrid'
import ProgressBar from '@/components/ProgressBar'
import FloatingActionButton from '@/components/FloatingActionButton'
import {
  getDayOfYear,
  isLeapYear,
  formatDate,
  formatWeekday,
} from '@/lib/date'

export default function Home() {
  const today = new Date()

  const year = today.getFullYear()
  const currentDay = getDayOfYear(today)
  const totalDays = isLeapYear(year) ? 366 : 365

  return (
    <main className="min-h-screen bg-neutral-800 text-white flex justify-center p-4">
      <div className="w-full max-w-md px-4 py-5">
        {/* Header */}
        <div className="mb-3 flex items-end">
          <h1 className="text-5xl font-bold">{year}</h1>
          <p className="text-lg text-neutral-400 pl-2">
            {formatDate(today)} {formatWeekday(today)}
          </p>
        </div>

        {/* Progress */}
        <ProgressBar
          currentDay={currentDay}
          totalDays={totalDays}
        />

        {/* Grid */}
        <div className="mt-4">
          <YearGrid currentDay={currentDay} />
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-neutral-400 mt-4">
          {currentDay} / {totalDays}
        </p>
      </div>

      {/* Floating Button */}
      <FloatingActionButton />
    </main>
  )
}
