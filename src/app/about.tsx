export default function About() {
    const data = new Date();
  return (
      <>
        <h1>About</h1>
        <p className="text-xl font-bold text-foreground">{data.getDay()}/{data.getMonth() + 1}/{data.getFullYear()}</p>
      </>
  );
}