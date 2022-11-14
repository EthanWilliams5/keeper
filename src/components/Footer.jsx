export default function Footer() {
  const date = new Date().toDateString()

  return (
    <footer className="footer">
      <p className="footer">Copyright { date }</p>
      </footer>
  )
}