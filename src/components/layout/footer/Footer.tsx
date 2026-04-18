import Container from "../../ui/Container"

const Footer = () => {
  return (
    <section className="bg-brand-300 dark:bg-brand-500 py-8 text-sm md:text-base text-neutral-200 dark:text-neutral-800">
      <Container className="flex flex-col md:flex-row justify-between items-center">
        <p>© 2026 Infinite Buildings Technologies</p>
        <p>Powered by <span className="font-semibold">Infinite Building Technologies</span></p>
      </Container>
    </section>
  )
}

export default Footer