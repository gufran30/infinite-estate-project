import Container from "../Container"

const Footer = () => {
  return (
    <section className="bg-brand-300 py-10 text-neutral-100">
      <Container className="flex justify-between items-center font-medium">
        <p>© 2026 Infinite Buildings Technologies</p>
        <p>Powered by <span className="font-semibold">Infinite Building Technologies</span></p>
      </Container>
    </section>
  )
}

export default Footer