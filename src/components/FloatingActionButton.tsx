'use client'

export default function FloatingActionButton() {
  return (
    <button
      className="
        fixed
        bottom-6
        left-6
        w-14
        h-14
        rounded-full
        bg-emerald-400
        text-black
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-105
        transition
      "
      onClick={() => {
        // later: router.push('/todo') or switch mode
        console.log('change page')
      }}
    >
      ↔
    </button>
  )
}
