export function SkipToMainContent() {
  const handleClick = () => {
    const main = document.getElementById('main-content')
    if (main) {
      main.tabIndex = 1
      main.focus()
      main.removeAttribute('tabIndex')
    }
  }

  return (
    <button
      type='button'
      className='fixed left-2 top-2 z-20 -translate-y-[120%] bg-white p-4 text-lg underline transition-transform focus-visible:translate-y-0'
      onClick={handleClick}
    >
      Skip to main content
    </button>
  )
}
